var idU = 0;

var Edge = function (e1, e2) {
    this.data = {
        id: "e"+idU,
        source: e1,
        target: e2

    } 
}

var convertGraph = function (data) {
    graph = {
        nodes: [],
        edges: []
    }
    var nodes = data["nodes"];
    for (node in nodes){
        
        graph.nodes.push({data: { id: nodes[node]["name"] }});

        for (edge in nodes[node].edges){
            graph.edges.push(new Edge(nodes[node].name, nodes[node].edges[edge]));
            idU++;
        }

    }

    return graph
}


var cy = cytoscape({
  container: $('#cy'),

  elements: convertGraph(bigGraph),

  layout: {
        name: 'breadthfirst',
        // fit: true,
        // padding: 30,

    },


  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],

});

