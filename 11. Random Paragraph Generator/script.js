let text = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa odio tenetur sunt, error dolores vel quod magnam praesentium rerum, optio repellat fuga.Obcaecati corrupti quod ab eum voluptates ipsam ullam!",

    "This is a para about the Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus minima quos odio eligendi perferendis! Error amet temporibus sint fugit maiores. Dolore ullam numquam expedita aliquid dolor voluptatum repellat, itaque, quia laborum soluta voluptate sapiente reprehenderit libero maxime ab sunt quam.",

    "Hello world haow are you today Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis recusandae at itaque nobis officia iusto adipisci ullam facere, aliquid asperiores officiis molestiae totam reprehenderit non voluptatem saepe ab debitis doloribus rerum suscipit labore atque quis. Consequatur odio omnis voluptates. Quas impedit alias similique ut perferendis nesciunt, autem cum nostrum. Qui tempore modi minima temporibus assumenda, necessitatibus quos dolore debitis doloremque?",

    "What are you doing here in this Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sapiente modi velit dolores voluptatem rem dignissimos quisquam odit incidunt soluta.",

    "India is really incredible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ea eos ipsam molestias culpa eius. Impedit officiis ut similique repellendus incidunt? Earum labore molestiae nulla natus aperiam vitae, dignissimos fugiat odit quidem!",

    "While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.",

    "While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.",

    "Yes. We're always interested in improving this generator and one of the best ways to do that is to add new and interesting paragraphs to the generator. If you'd like to contribute some random paragraphs, please contact us.",

    "The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create."
]

let item = document.getElementById('items');
let container = document.getElementById('data');
let btn = document.getElementById('btn');

function para() {
    if (isNaN(item.value) || item.value < 0 || item.value > text.length) {
        let randomText = Math.floor(Math.random() * text.length);
        container.innerHTML = `<p> ${text[randomText]}</p>`
    }
    else {
        let data = text.slice(0, item.value);
        let paragraph = data.map(
            (d) => {
                return `<p>${d}</p>`;
            }
        )
        container.innerHTML = paragraph.join('')
    }
}

