

import Link from "next/link";


const  Movie = async()=> {
  
  await new Promise(resolve => setTimeout(resolve, 2000));


  const apiUrl = process.env.NEXT_PUBLIC_RAPID_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

  console.log("apiUrl:", apiUrl);
  console.log("apiKey:", apiKey);
  const url = `${apiUrl}?api_key=${apiKey}`;

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(main_data.jawSummary,"main_data")
  
  console.log(data,"data were this ")
  return <div>
    <h1> movies detail</h1>
    <Link 
    href="/movie/affff">movies detail</Link>
  </div>;
}

export default Movie;
