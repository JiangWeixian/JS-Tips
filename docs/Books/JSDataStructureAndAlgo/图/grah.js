function Graph () {
  let vertices = []
  let adjList = {}
  let visitState = function () {
    let state = {}
    vertices.forEach((v)=> {
      state[v] = 'white'
    })
    return state
  }
  let dfs = function (v, color, callback) {
    callback(v)
    adjList[v].forEach((w)=> {
      if (color[w] === 'white') {
        color[w] = 'grey'
        dfs(w, color, callback)
      }
    })
    color[v] = 'black'
  }
  this.addVertex = (v)=> {
    vertices.push(v)
    adjList[v] = []
  }
  this.addEdge = (v, w)=> {
    adjList[v].push(w)
  }
  this.getGraph = ()=> {
    return adjList
  }
  this.BreadthOrder = (v, callback)=> {
    if (vertices.indexOf(v) < 0) {
      callback(v + ' not in graph')
      return null
    }
    let queue = [v]
    let state = visitState()
    while (queue.length) {
      let v = queue.shift()
      for (let i = 0; i < adjList[v].length; i++) {
        let w = adjList[v][i]
        if (state[w] === 'white') {
          state[w] = 'grey'
          queue.push(w)
        }
      }
      state[v] = 'black'
      callback(v)
    }
  }
  this.findMinPath = (v)=> {
    let queue = [v]
    let state = visitState()
    let distance = {}
    let previous = {}
    vertices.forEach((v)=> {
      distance[v] = 0
      previous[v] = ''
    })
    while (queue.length) {
      let v = queue.shift()
      for (let i = 0; i < adjList[v].length; i++) {
        let w = adjList[v][i]
        if (state[w] === 'white') {
          state[w] = 'grey'
          previous[w] = v
          distance[w] = distance[v] + 1
          queue.push(w)
        }
      }
      state[v] = 'black'
    }
    return function (callback) {
      // show min path
      let path = {}
      for (let i = 0; i < vertices.length; i++) {
        let w = vertices[i]
        if (v === w) {
          continue
        }
        path[w] = []
        for (let e = w; e !== v; e = previous[e]) {
          path[w].push(e)
        }
      }
      for (let e in path) {
        callback(path[e])
      }
    }
  }
  this.deepOrder = (callback) => {
    let state = visitState()
    vertices.forEach((v)=> {
      if (state[v] === 'white') {
        dfs(v, state, callback)        
      }
    })
  }
}

let graph = new Graph()
let myVertices = ['A','B','C','D','E','F','G','H','I']
myVertices.forEach((item)=> {
  graph.addVertex(item)
})
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log(graph.getGraph())
graph.BreadthOrder('A', function (value) {
  console.log(value)
})
graph.BreadthOrder('Z', function (value) {
  console.log(value)
})
console.log('最短路径')
graph.findMinPath('A')(function (path) {
  console.log('A-' + path.reverse().join('-'))
})
console.log('深度优先')
graph.deepOrder(function (value) {
  console.log(value)
})