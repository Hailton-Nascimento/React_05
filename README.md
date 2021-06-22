# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Instalar  uuid

inslatando blibioteca para gerar ID aleatorio
 comando =  npm install uuid

import { v4  as uuidv4} from "uuid";
Usar metodo
	id: uuidv4(),



### Instalando  React Icons

 instalando biclioteca de Icones

 comando: npm install react-icons --save

import { CgClose, CgInfo } from "react-icons/cg";

use o componente 
<CgInfo />
<CgClose />


### Instalando React router dom

comando: npm i react-router-dom

import { BrowserRouter as Routrer, Route } from "react-router-dom";

import { useHistory, useParams } from "react-router-dom";

cria rotas pra navegação

<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClik={handleTaskClik}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
				<Route path="/:taskTitle" exact component={TaskDetails} />


### Instalando AXIOS

comando: npm install axios