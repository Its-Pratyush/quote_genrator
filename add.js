let btn = document.getElementById('btn');
let output = document.getElementById('output')
let quotes = [

    ' "People often say that motivation doesnt last. Well, neither does bathing -- that is why we recommend it daily." -Zig Ziglar',

    ' Someday is not a day of the week. -Denise Brennan-Nelson',

    ' Hire character. Train skill. -Peter Schutz',

    ' Your time is limited, so do nott waste it living someone else life. -Steve Jobs',

    ' Sales are contingent upon the attitude of the salesman -- not the attitude of the prospect. -W. Clement Stone',

    '  Everyone lives by selling something -Robert Louis Stevenson',

    '  If you are not taking care of your customer, your competitor will. -Bob Hooey',

    ' The golden rule for every businessman is this: Put yourself in your customer place. -Orison Swett Marden',

    ' If you cannot do great things, do small things in a great way. -Napoleon HillMotivational quote by Napoleon Hill',


    ' The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are. They are frank in admitting this and are willing to pay for such talents. -Antos Parrish',


    '  Without a customer, you don not have a business -- all you have is a hobby. -Don Peppers',


    '  To be most effective in sales today, it is imperative to drop your sales mentality and start working with your prospects as if they we have already hired you. -Jill Konrath',


    '  Pretend that every single person you meet has a sign around his or her neck that says, Make me feel important. Not only will you succeed in sales, you will succeed in life. -Mary Kay Ash',


    '  It is not just about being better. It is about being different. You need to give people a reason to choose your business. -Tom Abbott',


    '  Being good in business is the most fascinating kind of art. Making money is art and working is art and good business is the best art. -Andy Warhol',


    '  Be patient with yourself. Self-growth is tender; it is holy ground. There is no greater investment. -Stephen Covey'
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

})