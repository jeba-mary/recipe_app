import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';


class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map(recipe => {
      return (
            <div className="img">
              <img src={recipe.image} alt="text" />
              <div class="content-block">
                <h4>{recipe.name}</h4>
                <p>₹{recipe.price}</p>
              </div>
            </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="gallery">
            {this.renderRecipes()}
          </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    recipes: Object.values(state.recipes),
  };
}

export default connect(mapStateToProps, {fetchRecipes})(HomePage);


