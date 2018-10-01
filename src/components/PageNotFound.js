import React from 'react';
import { Link } from 'react-router-dom';


export default class GenericNotFound extends React.Component
{
	render()
	{
		return(
			<div >
					<h3 align="center">
          {"Page Does not Exist,Press the Go Home Button to take you to the home page"}
          </h3>

          <div align="center">
          <Link to="/">
              {'Go 🔙 Home'}
          </Link>
          </div>
          </div>
        )
      }
    }
