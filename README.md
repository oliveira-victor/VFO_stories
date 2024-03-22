# VFO Stories: short stories audio book

This repository contains the source code for an audio book application where you can browse through different cards containing short stories with an audio controller. The data is consumed from an API.

Deploy link: https://vfostories.vercel.app/

## Features

* Stories catalog: Explore a list of story cards with audio controller, so you can read as you listen to the narrator.
* Rich visual aspects with the addition of Parallax JS plugin, for an engaging application.
* Data consumed from an API that will be mapped and listed for the user.
* Simple and efficient audio controller with play/pause button and an interactive progress bar.
* Implementation of Gulp JS for the images minification, Sass compilation and CSS compression, plus the addition of Gulp Uglify to reduce the size of the JavaScript file and help with the performance. Features that will reduce the loading time and enhance the performance of the app.

## Technologies used:
* HTML
* JavaScript
* Sass
* Gulp JS (imagemin, gulp-sass, uglify)
* Parallax JS

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/oliveira-victor/VFO_stories.git

2. Navigate to the project directory
   ```bash
   cd VFO_stories

3. Install dependencies
   ```bash
   npm install

4. Start Gulp JS to run imagemin, gulp-sass and gulp-uglify functions whenever there's change
   ```bash
   npm run gulp

5. You can start gulp-watch to keep track of any saved changes related to JavaScript and Scss files, and process the files on the run
   ```bash
   npm run gulp watch

6. Open your browser: Navigate to http://127.0.0.1:5500/ or simply start Live Server VS Code plugin

## Developing

Keep the source files you're working on in the /src folder. Gulp will search for the files in the following folders:
* Image files: src/images (and any folders inside)
* Scss files: src/styles
* JavaScript files: src/scripts

Gulp will compile Sass and compress images, JavaScript and CSS files and save them into /dist folder every time you run the 4th step of installation. If you run gulp-watch, make sure you run 'npm run gulp' manually every time a new image file is included in the src/images folder of the project, so it will be compressed and saved into the destination folder.

## Contributing

1. Fork the project
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License:
This project is licensed under the MIT License. See the LICENSE file for details.
