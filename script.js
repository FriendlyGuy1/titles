// let a = parseInt(prompt("pasirinkite pirma skaiciu: "));
// let b = parseInt(prompt("pasirinkite antra skaiciu: "));
// let sign = prompt("pasirinkite zenkla +,-,* arba /: ");

// function calculator(a,b,sign){
//     switch(sign){
//         case "+":
//             return a+b;
//         case "-":
//             return a-b;
//         case "*":
//             return a*b;
//         case "/":
//             return a/b;  
//         default:
//             console.log(`ivedete ne toki zenkla`);   
//     }   
// }

// console.log(calculator(a,b,sign));



// function getVardas(){
//     let fname = "Jonas";
//     return fname;
// }

// let userName = getVardas();

// console.log(userName);


// let array = ["one","one","two","five","three","four","five","six",'seven',"eight","nine","ten"];

// let newarray = []
// array.push("eleven");
// console.log(array);

// array.pop();
// console.log(array);

// array.shift();
// console.log(array);

// array.unshift("twenty");
// console.log(array);


// array.forEach((number,i)=>{
//     console.log(i+1,number);
// })

// let betterArray = array.map(i => {
//     console.log(i);
// });

// let results = array.filter(i => i == "one");
// console.log(results);


// console.log(array.sort());



// const klasiokai = [
//     ["Jolita", "zp20/1", 1, "kunciene@gmail.com"],
//     ["Linas", "zp21/1", 2, "linas@gmail.com"],
//     ["Kostas", "zp20/1", 10, "kostas@gmail.com"],
//     ["Andrius", "zp20/2", 6, "andrius@gmail.com"]
// ]

// console.log(`${klasiokai[2][0]} , ${klasiokai[2][2]}`)

// console.log(klasiokai)
// console.log(JSON.stringify(klasiokai));


// localStorage.setItem("MyName", "Paulius ");


const data = {
    0: {section: 'theater', subsection: '', title: 'Review: ‘Morning’s at Seven’ Awakens Again, Only to Hit Snooze', abstract: 'Paul Osborn’s 1930s play is revived, with its thin… somewhat bitter slice of small town life intact.', url: 'https://www.nytimes.com/2021/11/15/theater/mornings-at-seven-review.html'},
    1: {section: 'arts', subsection: '', title: 'The Art of Botox', abstract: 'How facial muscle paralysis insinuated itself into our emotional and creative lives.', url: 'https://www.nytimes.com/2021/11/15/arts/botox.html'},
    2: {section: 'arts', subsection: 'music', title: 'Taylor Swift’s ‘All Too Well’ and the Weaponization of Memory', abstract: 'The new 10-minute version of a bitter breakup song…power imbalance in the relationship it describes.', url: 'https://www.nytimes.com/2021/11/15/arts/music/taylor-swift-all-too-well.html'},
    3: {section: 'arts', subsection: 'design', title: 'Blue-Chip Art From Bitter Macklowe Divorce Brings $676 Million at Sotheby’s', abstract: 'A Sotheby’s executive called the court-ordered sal… most valuable single-owner auction ever staged.”', url: 'https://www.nytimes.com/2021/11/15/arts/design/sothebys-macklowe-auction-rothko-warhol.html'},
    4: {section: 'arts', subsection: 'music', title: 'If Remote Work Empties Downtowns, Can Theaters Fill Their Seats?', abstract: 'Since the pandemic, San Francisco has embraced wor…g if weeknight audiences are a thing of the past.', url: 'https://www.nytimes.com/2021/11/15/arts/music/san-francisco-theaters-concert-halls.html'},
    5: {section: 'arts', subsection: 'dance', title: 'Twyla Tharp: ‘Each One of the Dances Is My Hope for a Perfect World’', abstract: 'In “Twyla Now,” a program of works featuring balle…y Center, Tharp merges the past with the present.', url: 'https://www.nytimes.com/2021/11/15/arts/dance/twyla-tharp-twyla-now.html'},
    6: {section: 'arts', subsection: 'television', title: '‘The Sex Lives of College Girls’ Pursues an Awkward Education', abstract: 'The young stars of this new HBO Max comedy, cocrea…fication and messiness of undergraduate intimacy.', url: 'https://www.nytimes.com/2021/11/15/arts/television/the-sex-lives-of-college-girls.html'},
    7: {section: 'arts', subsection: 'music', title: 'Filings Show Continuing Battle Over Britney Spears’s Finances', abstract: 'New court documents reveal a heated exchange betwe…rs and the former business manager of her estate.', url: 'https://www.nytimes.com/2021/11/15/arts/music/britney-spears-conservatorship-filings.html'},
    8: {section: 'arts', subsection: 'television', title: 'First Asian American Muppet Arrives on ‘Sesame Street’', abstract: 'Ji-Young, a guitar-playing Korean American charact…ing children’s show starting on Thanksgiving Day.', url: 'https://www.nytimes.com/2021/11/15/arts/television/new-sesame-street-character-ji-young.html'},
    9: {section: 'theater', subsection: '', title: 'Jeanna de Waal Has Already Forgotten About That ‘Diana’ Film', abstract: 'The Netflix version of Broadway’s “Diana, the Musi…tress is staying positive ahead of opening night.', url: 'https://www.nytimes.com/2021/11/16/theater/jeanna-de-waal-diana-broadway.html'},
    10: {section: 'arts', subsection: 'music', title: 'Latin Grammys 2021: Complete Nominees List', abstract: 'Here are the nominees for the 22nd annual ceremony.', url: 'https://www.nytimes.com/2021/11/16/arts/music/latin-grammys-nominees-list.html'},
    11: {section: 'books', subsection: 'review', title: 'Neal Stephenson’s Mad, Mad, Mad, Mad World', abstract: '“Termination Shock,” his latest novel, is set in a…one haywire from the impacts of climate disaster.', url: 'https://www.nytimes.com/2021/11/16/books/review/neal-stephenson-termination-shock.html'},
    12: {section: 'books', subsection: 'review', title: 'The True-Life Inspiration for Dostoyevsky’s Famous Murderer', abstract: 'The model for Raskolnikov, the tortured killer in …trait of Dostoyevsky and the making of the novel.', url: 'https://www.nytimes.com/2021/11/16/books/review/the-sinner-and-the-saint-kevin-birmingham.html'},
    13: {section: 'books', subsection: 'review', title: 'The Cutting Mind and Romantic Heart of Elizabeth Hardwick', abstract: '“A Splendid Intelligence,” by Cathy Curtis, is the…iography of the much admired critic and novelist.', url: 'https://www.nytimes.com/2021/11/16/books/review/ca…-intelligence-the-life-of-elizabeth-hardwick.html'},
    14: {section: 'books', subsection: 'review', title: 'Seven Immigrant Women Who Changed the Way Americans Eat', abstract: '“Taste Makers,” by Mayukh Sen, features women who,…Americans to the dishes of their native cultures.', url: 'https://www.nytimes.com/2021/11/16/books/review/taste-makers-mayukh-sen.html'},
    15: {section: 'books', subsection: 'review', title: 'Bildungsromans From Around the World', abstract: 'New fiction by Elif Shafak, S.J. Sindu and Bisi Adjapon.', url: 'https://www.nytimes.com/2021/11/16/books/review/bl…apon-the-island-of-missing-trees-elif-shafak.html'},
    16: {section: 'books', subsection: 'review', title: 'How the Greek Revolution of 1821 Led to the Global System of Nation-States', abstract: 'Mark Mazower’s “The Greek Revolution” examines a c…ry-old event that continues to reverberate today.', url: 'https://www.nytimes.com/2021/11/16/books/review/the-greek-revolution-mark-mazower.html'},
    17: {section: 'books', subsection: 'review', title: 'A Debut Novel Where Small Moments Add Up to Something Big', abstract: 'In “A Little Hope,” Ethan Joella explores quiet lives in small-town Connecticut.', url: 'https://www.nytimes.com/2021/11/16/books/review/a-little-hope-ethan-joella.html'},
    18: {section: 'books', subsection: '', title: 'In Another Trump Book, a Journalist’s Belated Awareness Steals the Show', abstract: '“Betrayal,” by Jonathan Karl, is a record of Trump…e House correspondent’s attempt to understand it.', url: 'https://www.nytimes.com/2021/11/16/books/review-betrayal-final-act-trump-show-jonathan-karl.html'},
    19: {section: 'arts', subsection: 'television', title: 'Seth Meyers: Steve Bannon Fancies Himself to Be Logan Roy', abstract: 'Meyers said Bannon was more like “a coked-up flunk…red some documents and accidentally screw it up.”', url: 'https://www.nytimes.com/2021/11/16/arts/television…steve-bannon-fancies-himself-to-be-logan-roy.html'},
    20: {section: 'arts', subsection: 'music', title: 'Terence Wilson, Key Part of Reggae Band UB40, Dies at 64', abstract: 'As Astro with a popular racially diverse British g… he added rap vocals to hits like “Red Red Wine.”', url: 'https://www.nytimes.com/2021/11/15/arts/music/terence-wilson-astro-dead.html'},
    21: {section: 'books', subsection: '', title: 'Let’s Tackle Your Book Shopping List', abstract: 'There’s no doubt that books can make for the most …he perfect one can be nerve-racking. Let us help.', url: 'https://www.nytimes.com/interactive/2021/11/15/books/books-to-give.html'},
    22: {section: 'books', subsection: '', title: '‘Medusa’s Ankles,’ a Selection of A.S. Byatt’s Wildly Imagined Stories Across Three Decades', abstract: 'Byatt has been an articulate advocate for tapping …ories tend to stay in realms of thinner altitude.', url: 'https://www.nytimes.com/2021/11/15/books/review-medusas-ankles-a-s-byatt.html'}
    }


   for( i in data){
        console.log(`title : ${data[i].title}`)
   } 