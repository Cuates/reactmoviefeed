import React from 'react';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';
import MovieFeedActionCard from '../Components/MovieFeedActionCard';
import MovieFeedCard from '../Components/MovieFeedCard';

function ApiExtract(props) {
  const url = '<API_URL>';

  let content = null;

  let cardType = props.cardtype;

  let movieResponse = useAxiosGet(url, props.method, props.moviesearch);

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
      if (cardType === "MovieFeedActionCard") {
        content = (
          <MovieFeedActionCard
            moviesResponse = {movieResponse.data.Result}
          />
        );
      }
      else if (cardType === "MovieFeedCard") {
        content = (
          <MovieFeedCard
            moviesResponse = {movieResponse.data.Result}
          />
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

export default ApiExtract;