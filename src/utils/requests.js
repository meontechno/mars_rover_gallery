export async function fetchRoverImages(data) {
    const allProductsPromise = fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+data+"&api_key=dPkAP0ztS403gIZE8aBpyUnxdzPc9bvNyXp4IQmt", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        })
        .then(response => response.json()        
        .then(data => {
            return {
                "status":response.status, 
                "images": data
            }
        }))
    return allProductsPromise;
}