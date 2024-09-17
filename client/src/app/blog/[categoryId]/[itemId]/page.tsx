
export default function Page({ params }: { params: { categoryId: string, itemId: string } }) {
  return <div>My Post: {params.categoryId} {params.itemId}</div>
}