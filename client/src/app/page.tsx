
export default function Home() {
  return (
    <main className="flex justify-center gap-4 mt-5">
      <video width="500" height="240" controls preload="none" loop >
        <source src="/videos/flower.webm" type="video/mp4"  />
      </video>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gfU1iZnjRZM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      <iframe width="1280" height="720" src="https://www.youtube.com/embed/4u856utdR94" frameBorder="0" allowFullScreen></iframe>

    </main>
  );
}
