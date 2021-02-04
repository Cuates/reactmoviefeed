import React from 'react';
import Loader from './Loader';
import useAxiosAlteration from '../Hooks/HttpAlteration';
import MovieFeedActionCard from './MovieFeedActionCard';
import MovieFeedAdd from './MovieFeedAdd';

function ApiAlteration(props) {
  const url = '<API_URL>';

  let content = null;

  let cardType = props.cardtype;

  // console.log(JSON.stringify(props));

  let movieResponse = useAxiosAlteration(url, props.method, props.payload);

  if (movieResponse.error) {
    content = <p>
      { movieResponse.data.Status }
      </p>
  }

  if (movieResponse.loading) {
    content = <Loader></Loader>
  }

  if (movieResponse.data) {
    if (movieResponse.data.Count > 0) {
      // console.log(JSON.stringify(movieResponse.data.Result));
      if (cardType === "MovieFeedAdd") {
        content = (
          <MovieFeedAdd
            moviesResponse = {movieResponse.data.Result}
          />
        );
      }
      else if (cardType === "MovieFeedActionCard") {
        content = (
          movieResponse.data.Result.map((movieResponse, key) =>
            <div key = {key}>
              <MovieFeedActionCard
                moviesResponse = {movieResponse}
              />
            </div>
          )
        );
      }
      // else {
      //   content = (
      //     <div className = "border mb-4 rounded overflow-hidden">
      //       <div className = "p-3">
      //         <h3 className = "font-bold text-xl mb-3">
      //           Display Card Not Implemented
      //         </h3>
      //       </div>
      //     </div>
      //   );
      // }
    }
    else {
      content = (
        <div className = "border mb-4 rounded overflow-hidden">
          <div className = "p-3">
            <h3 className = "font-bold text-xl mb-3">
              No data found
            </h3>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default ApiAlteration;