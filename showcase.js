class ShowcaseContent {
    demos = [
        { name: 'Streamgraph', blockid: '4060954', imgUrl: 'https://d3js.org/ex/stream.png'},
        { name: 'Choropleth', blockid: '4060606', imgUrl: 'https://d3js.org/ex/choropleth.png'},
        { name: 'Chord Diagram', blockid: '4062006', imgUrl: 'https://d3js.org/ex/chord.png'},
        { name: 'Force Graph', blockid: '4062045', imgUrl: 'https://d3js.org/ex/force.png'}/*,
        { name: 'Sunburst', blockid: '4063423', imgUrl: 'http://d3js.org/ex/sunburst.png'},
        { name: 'Circle Packing', blockid: '4063530', imgUrl: 'http://d3js.org/ex/pack.png'},
        { name: 'Population Pyramid', blockid: '4062085', imgUrl: 'http://d3js.org/ex/population.png'},
        { name: 'Stacked Bars', blockid: '3943967', imgUrl: 'http://d3js.org/ex/stack.png'},
        { name: 'Epicyclical Gears', blockid: '1353700', imgUrl: 'http://d3js.org/ex/gears.png'},
        { name: 'Treemap', blockid: '4063582', imgUrl: 'http://d3js.org/ex/treemap.png'},
        { name: 'Node-Link Tree', blockid: '4063550', imgUrl: 'http://d3js.org/ex/tree.png'},
        { name: 'Dendrogram', blockid: '4063570', imgUrl: 'http://d3js.org/ex/cluster.png'},
        { name: 'Tadpoles', blockid: '1136236', imgUrl: 'http://d3js.org/ex/sperm.png'},
        { name: 'Showreel', blockid: '1256572', imgUrl: 'http://d3js.org/ex/show-reel.png'},
        { name: 'Euro Debt', blockid: '1308257', imgUrl: 'http://d3js.org/ex/debt.png'},
        { name: 'Circle-Square Illusion', blockid: '1386444', imgUrl: 'http://d3js.org/ex/illusion.png'},
        { name: 'Raindrops', blockid: '849853', imgUrl: 'http://d3js.org/ex/rain.png'},
        { name: 'Indented Tree', blockid: '1093025', imgUrl: 'http://d3js.org/ex/indented-tree.png'},
        { name: 'Calendar View', blockid: '4063318', imgUrl: 'http://d3js.org/ex/calendar.png'},
        { name: 'Bubble Chart', blockid: '4061502', imgUrl: 'http://d3js.org/ex/box.png'},
        { name: 'Condegram Spiral Plot', blockid: '027e163073864ef2ac4ceb5c2c0bf616',
            imgUrl: 'https://gist.githubusercontent.com/arpitnarechania/027e163073864ef2ac4ceb5c2c0bf616/raw/3c73dd679a0d9a132f40be2e717ac3073dde00f4/thumbnail.png'},
    */];
    activeDemo = this.demos[1];

    template = (demo, index) => `<a onclick="chooseDemo(${index})" class="${this.activeDemo===demo ? 'active' : ''}">
                            {{demo.name}}<br />
                            <img width="133" src="${demo.imgUrl}">
                        </a>`;
    moreDemosTemplate = `<a href="https://demos.easypz.io/" target="_blank" class="more-demos">
                            More demos at demos.easypz.io!
                            <br />
                            <i class="fa fa-plus"></i>
                        </a>`;

    render() {
        const carousel = document.getElementById('showcase-carousel');

        let html = '';
        for(let i = 0; i < this.demos.length; i++) {
            let demo = this.demos[i];
            html += this.template(demo, i);
        }
        html += this.moreDemosTemplate;

        carousel.innerHTML = html;
    }

    chooseDemo(index) {
        this.activeDemo = this.demos[index];
    }

    updateShowcaseIframe() {
        const iframe = document.getElementById('showcase-iframe');
        iframe.setAttribute('src', 'https://demos.easypz.io/' + this.activeDemo.blockid);
    }
}