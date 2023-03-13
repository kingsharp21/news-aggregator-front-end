// import Article from "../components/articles/Article";
// import Axios from "axios";

// export const searchKeyword = (keyword) => {
//   let channels = [];
//   Axios.get(
//     `https://content.guardianapis.com/search?q=${keyword}&format=json&tag=film/film,tone/reviews&1&show-tags=contributor&show-fields=headline,thumbnail,short-url&order-by=relevance&api-key=test`
//   )
//     .then((response) => {
//       const data = response.data.results;
//       for (let article of data) {
//         return (
//           <Article
//             img={article.fields.thumbnail}
//             apiname="The Guardian"
//             source=""
//             title={article.fields.headline}
//             url={article.webUrl}
//             date={article.webPublicationDate}
//             desc='jkfhbf'
//           />

//         );
//       }

//     })
//     .catch((error) => console.log(error));

//   return channels;
// };

// // export const filteredNewApi = () => {
// //   let channels = [];
// //   Axios.get(
// //     "https://newsapi.org/v2/top-headlines/sources?apiKey=d7d63ba460af4c49915a9c7dec9b3796"
// //   )
// //     .then((response) => {})
// //     .catch((error) => console.log(error));

// //   return channels;
// // };
