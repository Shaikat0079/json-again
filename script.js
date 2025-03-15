function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res=>res.json())
    .then(data=>displayCategories(data.categories));
}
function displayCategories(categories){
    // console.log(categories)
    const categoryContainer = document.getElementById('category-container');

    for(let cat of categories){
        // console.log(cat)
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = 
        ` 

        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        
        `
        categoryContainer.append(categoryDiv)
    }
}
loadCategories()

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=>displayVideos(data.videos))
}

loadVideos()

const displayVideos = (videos)=>{
    const videoContainer = document.getElementById('video-container');
    videos.forEach(video => {
        // console.log(video)
        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
        
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      ${video.title}
      ${
        video.authors[0].verified===true ? `<div class="badge badge-secondary">Verified</div>`: ""
      }
    </h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        `
        videoContainer.append(videoCard)
    });

}