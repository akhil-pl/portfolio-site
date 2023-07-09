# portfolio-site
 Portfolio site using ReactJS


## What all tools are used
- VScode
- ReactJS
- GitHub


## Getting started
1. Open local file location where you want to write your code in VScode.
2.  Open terminal and run the following code. (Hopping you have installed npm)
```bash
npm create vite@latest portfolio-site -- --template react
```
We are using vite to create react project as it is easier than default create-react-app. This will create a directory named "portfolio-site"

3. Now run the following codes in the terminal.
```bash
cd portfolio-site

npm install

npm run dev
```
This will install the required packages and run the application. Noe you can view the app in this link 'http://127.0.0.1:5173/'

4. We will be using Tailwind CSS. For that run the followwing codes in the terminal. This specific for vite framework. https://tailwindcss.com/docs/guides/vite
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

5. We will be using react icons
```bash
npm i react-icons
```

On the folder structrure you can see there is a 'index.html', this is the root view of or app. Inside the 'src' folder are our .jsx and .css files. And also the assets folder.


Link to add picture discription. https://codingstatus.com/how-to-display-images-in-react-js/

6. We can delete App.css file as we are using tailwind CSS we only need one base CSS. Other CSS are given along the JS code as 'className'


7. We will be using react-typed for styling. We may have to force install as the dependencies are not compatible
```bash
npm install react-typed --save --force
```