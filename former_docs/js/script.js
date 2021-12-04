function Network() {
    // Params
    width = 960;
    height = 800;

    // allData is unfiltered data,
    // Rest is for the filtered view
    allData = []
    curLinksData = []
    curNodesData = []
    linkedByIndex = {}

    // SVG element hodlers
    svg_nodes = null
    svg_links = null

    // Pointers to cirlces and lines of the nods and links
    node = null
    link = null

    // Variable sto refect the current settings of visualization
    layout = "force"
    filter = "all"
    sort = "teams"

    // Force directed algorithm
    force = d3.forceSimulation()

    // Color function for nodes
    nodeColors = d3.scaleOrdinal(d3.schemeCategory10);

    // Tooltip used to display details, not working right now,
    // have to find where he either imports or creates it
    // tooltip = Tooltip("vis-tooltip", 230)

    charge = (node) => {
        -Math.pow(node.radius, 2.0) / 2
    }

    // Constructing network
    //  Selection: SVG element from webpage
    //  data: JSON format with nodes and links
    network = (selection, data) => {
        // Main implementation
    }

    // Bulk of the network, is used to update layout,
    // and any sort of visualization
    // Is called everytime a parameter is changed and
    // the network needs a reset
    update = () => {
        curNodesData = filterNodes
    }

    // Super cool. This function is public and can be called outside
    // like network.toggleLayout, whereas update is private and cannot
    network.toggleLayout = (newLayout) => {
        console.log("test")
    }

    return network
}


ntwrk = Network()

json_path = "../../data/webgraphs/test.json"
d3.json(json_path).then(data => {
    console.log(data)
    ntwrk($(".title"), data)
})