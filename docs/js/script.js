function Network() {
    width = 960;
    height = 800;

    network = (selection, data) => {
        // Main implementation
    }

    update = () => {

    }

    // Super cool. This function is public and can be called outside
    // like network.toggleLayout, whereas update is private and cannot
    network.toggleLayout = (newLayout) => {
        console.log("test")
    }

    return network
}