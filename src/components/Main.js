import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json'


class Main extends React.Component {

  render() {
    return (
      <main>{
        Data.map((animal) => {
          return (<HornedBeasts title={animal.title}
            imgSrc={animal.image_url}
            description={animal.description}
          />);
        })
      }
      </main>
    )
  }
}

export default Main;