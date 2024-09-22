import envConfig from '@/config';
import { LoginResType } from '@/schemaValidations/auth.schema';

type CustomOptions = Omit<RequestInit, 'method'> & {
    baseUrl?: string | undefined;
};

const ENTITY_ERROR_STATUS = 422;

// khai báo kiểu dữ liệu EntityErrorPayload
type EntityErrorPayload = {
    message: string;
    errors: {
        field: string;
        message: string;
    }[];
};

// Bắt lỗi cho chúng ta
export class HttpError extends Error {
    status: number;
    payload: {
        message: string;
        [key: string]: any;
    };
    constructor({ status, payload }: { status: number; payload: any }) {
        super('Http Error');
        this.status = status;
        this.payload = payload;
    }
}

export class EntityError extends HttpError {
    status: 422;
    payload: EntityErrorPayload;
    constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
        super({ status, payload });
        this.status = status;
        this.payload = payload;
    }
}

// Khai báo SessionToken và chỉ dùng ở client
class SessionToken {
    private token = '';
    get value() {
        return this.token;
    }
    set value(token: string) {
        // Nếu gọi method này ở server thì sẽ bị lỗi
        if (typeof window === 'undefined') {
            throw new Error('Cannot set token on server side');
        }
        this.token = token;
    }
}
export const ClientSessionToken = new SessionToken();

// Làm gắn gọn request hơn để tiện sử dụng ở nhiều nơi
const request = async <Response>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: CustomOptions | undefined,
) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined;
    const baseHeaders = {
        'Content-Type': 'application/json',
        Authorization: ClientSessionToken.value ? `Bearer ${ClientSessionToken.value}` : '',
    };

    // Nếu không truyền baseUrl ( hoặc baseUrl == undefined) thì lấy từ envConfig.NEXT_PUBLIC_API_ENDPOINT
    // Nếu truyền baseUrl thì lấy giá trị truyền vào, truyền vào "" thì đồng nghĩa với việc chúng ta gọi API đến Next.js Server
    const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl;

    // fullUrl để cho người dùng nếu làm dư dấu / thì cũng không có bị lỗi
    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers,
        },
        body,
        method,
    });

    const payload: Response = await res.json();
    const data = {
        status: res.status,
        payload,
    };

    // Interceptor là nơi chúng ta xử lý request và response trước khi trả về cho phía component
    if (!res.ok) {
        if (res.status === ENTITY_ERROR_STATUS) {
            throw new EntityError(
                data as {
                    status: 422;
                    payload: EntityErrorPayload;
                },
            );
        } else {
            throw new HttpError(data);
        }
    }

    if (['/auth/login', '/auth/register'].includes(url)) {
        ClientSessionToken.value = (payload as LoginResType).data.token;
    } else if ('/auth/login'.includes(url)) {
        ClientSessionToken.value = '';
    }

    return data;
};

const http = {
    get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('GET', url, options);
    },

    post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('POST', url, { ...options, body });
    },

    put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('PUT', url, { ...options, body });
    },

    delete<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
        return request<Response>('DELETE', url, { ...options, body });
    },
};

export default http;
