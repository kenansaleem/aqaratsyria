# Real Estate Website (عقارات)

A modern React-based real estate website that allows users to browse properties for both sale and rent. The website is built with React and React Bootstrap, featuring a responsive design and Arabic language support.

## 🌟 Features

- 🏠 Browse properties for sale and rent
- 🔍 Detailed property views
- 📱 Fully responsive design
- 🈯 Arabic language support
- 🎨 Modern UI with Bootstrap styling
- 🔄 Dynamic routing

## 🚀 Technologies Used

- React.js
- React Router DOM
- React Bootstrap
- CSS3
- JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:

```bash
cd react-project2
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## 🏗️ Project Structure

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📱 Components

### Header

- Main navigation component
- Responsive navbar with logo
- Links to Home, Buy, and Rent sections

### PropertyCard

- Displays individual property information
- Shows property image, title, price, and area
- Links to detailed property view

### PropertiesList

- Displays grid of property cards
- Filters properties by category (rent/sell)
- Responsive layout with flex-wrap

### PropertyCardDetails

- Shows detailed information about a specific property
- Dynamic routing based on property category
- Back navigation to category list

## 🔄 Routing Structure

- `/` - Home page
- `/sell` - Properties for sale
- `/rent` - Properties for rent
- `/sell/:propertyId` - Individual property details (sale)
- `/rent/:propertyId` - Individual property details (rent)

## 🎨 Styling

The project uses a combination of:

- React Bootstrap components
- Custom CSS modules
- Responsive design principles
- RTL (Right-to-Left) layout support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Authors

- [Your Name]

## 🙏 Acknowledgments

- React Bootstrap for the component library
- Create React App for the project setup
