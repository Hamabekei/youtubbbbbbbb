const API_KEY = "YOUR_API_KEY_HERE";

async function search() {
  const query = document.getElementById("query").value;
  const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(query)}&key=${API_KEY}`);
  const data = await res.json();
  const results = document.getElementById("results");
  results.innerHTML = "";
  data.items.forEach(item => {
    results.innerHTML += `<div class="video"><iframe src="https://www.youtube.com/embed/${item.id.videoId}" allowfullscreen></iframe><p>${item.snippet.title}</p></div>`;
  });
}
