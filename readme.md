
### Red Badger Martian Robots test
Given the time constraint expected for the exercise, and following closely the tips and guidelines ,I entirely focused on the functional aspect of the exercise,spending most of the time on the 2 main aspects I considered important for the resolution:
* Problem solving - finding a logical solution for the problemn
* Implementing a software to execute and return the actual solution for the problem

Technology decision
Given the solution should be easy to scale, expand and support I decided to use this open source framework/lib to procure easy build , deployment and execution. 

Conclusion
Managed to produce an executable solution with the resolution of the core/main problem 
Ideally the next steps would be:
* File based solution, all instructions will need to be added in a single file to be executed sequentially
* there are no dependencies a part of the "node_modules" after installing npm
* Addition of UI to handle the request dynamically and also have a visual understanding of the intructions and robot movements. 
* Incorporate some modularization and abstraction to expand each robot request in an asynchronous approach rather than sequential. 

#### To run the code

```sh
npm install
npm src/index.js
```

#### To run tests

```sh
npm install --save mocha chai
npm test
```
