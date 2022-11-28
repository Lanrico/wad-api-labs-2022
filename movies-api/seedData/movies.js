const movies = [
    {
        "adult": false,
        "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
        "genre_ids": [
            28,
            14,
            878
        ],
        "id": 590706,
        "original_language": "en",
        "original_title": "Jiu Jitsu",
        "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
        "popularity": 2633.943,
        "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
        "release_date": "2020-11-20",
        "title": "Jiu Jitsu",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/vam9VHLZl8tqNwkp1zjEAxIOrkk.jpg",
        "genre_ids": [
            10751,
            14,
            10770
        ],
        "id": 671583,
        "original_language": "en",
        "original_title": "Upside-Down Magic",
        "overview": "Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.",
        "popularity": 2362.99,
        "poster_path": "/xfYMQNApIIh8KhpNVtG1XRz0ZAp.jpg",
        "release_date": "2020-07-31",
        "title": "Upside-Down Magic",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 64
    },
    {
        "adult": false,
        "backdrop_path": "/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 577922,
        "original_language": "en",
        "original_title": "Tenet",
        "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        "popularity": 1973.492,
        "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        "release_date": "2020-08-22",
        "title": "Tenet",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2638
    },
    {
        "adult": false,
        "backdrop_path": "/ckfwfLkl0CkafTasoRw5FILhZAS.jpg",
        "genre_ids": [
            28,
            35,
            14
        ],
        "id": 602211,
        "original_language": "en",
        "original_title": "Fatman",
        "overview": "A rowdy, unorthodox Santa Claus is fighting to save his declining business. Meanwhile, Billy, a neglected and precocious 12 year old, hires a hit man to kill Santa after receiving a lump of coal in his stocking.",
        "popularity": 1848.361,
        "poster_path": "/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg",
        "release_date": "2020-11-13",
        "title": "Fatman",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 118
    },
    {
        "adult": false,
        "backdrop_path": "/zKv7KF0pH9ASv2uGgTvTylMlxQn.jpg",
        "genre_ids": [
            37
        ],
        "id": 729648,
        "original_language": "en",
        "original_title": "The Dalton Gang",
        "overview": "When their brother Frank is killed by an outlaw, brothers Bob Dalton, Emmett Dalton and Gray Dalton join their local sheriff's department. When they are cheated by the law, they turn to crime, robbing trains and anything else they can steal from over the course of two years in the early 1890's. Trying to out do Jesse James, they attempt to rob two banks at once in October of 1892, and things get ugly",
        "popularity": 1441.44,
        "poster_path": "/6OeGqp18oZucUGziMIRNhLouZ75.jpg",
        "release_date": "2020-11-02",
        "title": "The Dalton Gang",
        "video": false,
        "vote_average": 4.3,
        "vote_count": 13
    },
    {
        "adult": false,
        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "genre_ids": [
            80,
            53,
            18
        ],
        "id": 475557,
        "original_language": "en",
        "original_title": "Joker",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "popularity": 1340.942,
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "release_date": "2019-10-02",
        "title": "Joker",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 15818
    },
    {
        "adult": false,
        "backdrop_path": "/mZgbq4Zpxz7ozWXl4asj6vNdlIi.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 454433,
        "original_language": "en",
        "original_title": "Magic Camp",
        "overview": "Andy, at the urging of his former mentor and Magic Camp owner Roy Preston, returns to the camp of his youth hoping to reignite his career. Instead, he finds inspiration in his ragtag bunch of rookie magicians.",
        "popularity": 1307.25,
        "poster_path": "/awcPLFFYjufRXd2oAAP6ZIXF9vM.jpg",
        "release_date": "2020-08-14",
        "title": "Magic Camp",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 102
    },
    {
        "adult": false,
        "backdrop_path": "/2Fk3AB8E9dYIBc2ywJkxk8BTyhc.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 524047,
        "original_language": "en",
        "original_title": "Greenland",
        "overview": "John Garrity, his estranged wife and their young son embark on a perilous journey to find sanctuary as a planet-killing comet hurtles toward Earth. Amid terrifying accounts of cities getting levelled, the Garrity's experience the best and worst in humanity. As the countdown to the global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
        "popularity": 1143.073,
        "poster_path": "/bNo2mcvSwIvnx8K6y1euAc1TLVq.jpg",
        "release_date": "2020-07-29",
        "title": "Greenland",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 853
    },
    {
        "adult": false,
        "backdrop_path": "/qAKvUu2FSaDlnqznY4VOp5PmjIF.jpg",
        "genre_ids": [
            28,
            12,
            18,
            14
        ],
        "id": 337401,
        "original_language": "en",
        "original_title": "Mulan",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "popularity": 1104.142,
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "release_date": "2020-09-04",
        "title": "Mulan",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 3241
    },
    {
        "adult": false,
        "backdrop_path": "/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 724989,
        "original_language": "en",
        "original_title": "Hard Kill",
        "overview": "The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.",
        "popularity": 1067.409,
        "poster_path": "/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
        "release_date": "2020-10-23",
        "title": "Hard Kill",
        "video": false,
        "vote_average": 5,
        "vote_count": 224
    },
    {
        "adult": false,
        "backdrop_path": "/5846jHODKbja38USbFcXgOnsfqb.jpg",
        "genre_ids": [
            10751,
            14,
            12
        ],
        "id": 654028,
        "original_language": "en",
        "original_title": "The Christmas Chronicles: Part Two",
        "overview": "Kate Pierce is reluctantly spending Christmas with her mom’s new boyfriend and his son Jack. But when the North Pole and Christmas are threatened to be destroyed, Kate and Jack are unexpectedly pulled into a new adventure with Santa Claus.",
        "popularity": 1004.099,
        "poster_path": "/6sG0kbEvAi3RRLcGGU5h8l3qAPa.jpg",
        "release_date": "2020-11-18",
        "title": "The Christmas Chronicles: Part Two",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 201
    },
    {
        "adult": false,
        "backdrop_path": "/fTDzKoQIh1HeyjfpG5AHMi2jxAJ.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 682377,
        "original_language": "en",
        "original_title": "Chick Fight",
        "overview": "When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.",
        "popularity": 984.768,
        "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
        "release_date": "2020-11-13",
        "title": "Chick Fight",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 48
    },
    {
        "adult": false,
        "backdrop_path": "/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 581392,
        "original_language": "ko",
        "original_title": "반도",
        "overview": "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",
        "popularity": 973.861,
        "poster_path": "/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
        "release_date": "2020-07-15",
        "title": "Peninsula",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 867
    },
    {
        "adult": false,
        "backdrop_path": "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
        "genre_ids": [
            14,
            10751,
            12,
            35,
            27
        ],
        "id": 531219,
        "original_language": "en",
        "original_title": "Roald Dahl's The Witches",
        "overview": "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",
        "popularity": 870.023,
        "poster_path": "/betExZlgK0l7CZ9CsCBVcwO1OjL.jpg",
        "release_date": "2020-10-26",
        "title": "Roald Dahl's The Witches",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 869
    },
    {
        "adult": false,
        "backdrop_path": "/gnf4Cb2rms69QbCnGFJyqwBWsxv.jpg",
        "genre_ids": [
            53,
            28,
            18,
            80
        ],
        "id": 671039,
        "original_language": "fr",
        "original_title": "Bronx",
        "overview": "Caught in the crosshairs of police corruption and Marseille’s warring gangs, a loyal cop must protect his squad by taking matters into his own hands.",
        "popularity": 794.676,
        "poster_path": "/9HT9982bzgN5on1sLRmc1GMn6ZC.jpg",
        "release_date": "2020-10-30",
        "title": "Rogue City",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 272
    },
    {
        "adult": false,
        "backdrop_path": "/iQxJuPqCGOO4Iy3uFbMWCIGHkwE.jpg",
        "genre_ids": [
            10752,
            28
        ],
        "id": 635780,
        "original_language": "en",
        "original_title": "Rogue Warfare: Death of a Nation",
        "overview": "After rescuing Daniel from the terrorist Black Mask Organization, the team uncovers plans for a deadly bomb set to detonate in 36 hours that threatens world order. With no time to recover, Daniel must throw his life back on the line as he and his elite team of soldiers race against time to find the bomb and defeat their enemy once and for all. Outnumbered and overmatched, each soldier must find their inner strength and skill to overcome insurmountable odds.",
        "popularity": 790.044,
        "poster_path": "/8GVpIEBqlRBvx28G0LfEX0U8D2k.jpg",
        "release_date": "2020-09-25",
        "title": "Rogue Warfare: Death of a Nation",
        "video": false,
        "vote_average": 4.8,
        "vote_count": 10
    },
    {
        "adult": false,
        "backdrop_path": "/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg",
        "genre_ids": [
            16,
            28,
            12,
            14,
            18
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 738.31,
        "poster_path": "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer the Movie: Mugen Train",
        "video": false,
        "vote_average": 6,
        "vote_count": 87
    },
    {
        "adult": false,
        "backdrop_path": "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
        "genre_ids": [
            16,
            14,
            12,
            35,
            10751
        ],
        "id": 400160,
        "original_language": "en",
        "original_title": "The SpongeBob Movie: Sponge on the Run",
        "overview": "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",
        "popularity": 716.962,
        "poster_path": "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
        "release_date": "2020-08-14",
        "title": "The SpongeBob Movie: Sponge on the Run",
        "video": false,
        "vote_average": 8,
        "vote_count": 1669
    },
    {
        "adult": false,
        "backdrop_path": "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "id": 539885,
        "original_language": "en",
        "original_title": "Ava",
        "overview": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        "popularity": 663.458,
        "poster_path": "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        "release_date": "2020-07-02",
        "title": "Ava",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 757
    },
    {
        "adult": false,
        "backdrop_path": "/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg",
        "genre_ids": [
            28,
            53,
            12,
            18
        ],
        "id": 741067,
        "original_language": "en",
        "original_title": "Welcome to Sudden Death",
        "overview": "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
        "popularity": 624.502,
        "poster_path": "/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
        "release_date": "2020-09-29",
        "title": "Welcome to Sudden Death",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 184
    }
];

export default movies;