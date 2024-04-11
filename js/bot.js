const jsonData = [
  { prompt: "hi", response: "greeting" },
  { prompt: "hi", response: "greeting" },
  { prompt: "morning", response: "greeting" },
  { prompt: "evening", response: "greeting" },
  { prompt: "hellow", response: "greeting" },
  { prompt: "how are you?", response: "greeting2" },
  { prompt: "how are you", response: "greeting2" },
  { prompt: "how are u", response: "greeting2" },
  { prompt: "how are u?", response: "greeting2" },
  { prompt: "fine", response: "greeting2" },
  { prompt: "what about you?", response: "greeting2" },
  { prompt: "what about you", response: "greeting2" },
  { prompt: "how was your day?", response: "greeting2" },
  { prompt: "how was your day", response: "greeting2" },
  { prompt: "your day", response: "greeting2" },
  { prompt: "is anyone there?", response: "greeting" },
  { prompt: "is anyone there", response: "greeting" },
  { prompt: "hello", response: "greeting" },
  { prompt: "good day", response: "greeting" },
  { prompt: "what's up", response: "greeting" },
  { prompt: "how are ya", response: "greeting2" },
  { prompt: "heyy", response: "greeting" },
  { prompt: "whatsup", response: "greeting" },
  { prompt: "??? ??? ??", response: "greeting" },
  { prompt: "cya", response: "goodbye" },
  { prompt: "see you", response: "goodbye" },
  { prompt: "bye bye", response: "goodbye" },
  { prompt: "See you later", response: "goodbye" },
  { prompt: "goodbye", response: "goodbye" },
  { prompt: "i am Leaving", response: "goodbye" },
  { prompt: "bye", response: "goodbye" },
  { prompt: "good night", response: "goodbye" },
  { prompt: "have a Good day", response: "goodbye" },
  { prompt: "talk to you later", response: "goodbye" },
  { prompt: "ttyl", response: "goodbye" },
  { prompt: "i got to go", response: "goodbye" },
  { prompt: "gtg", response: "goodbye" },
  { prompt: "what is the name of your developers", response: "creator" },
  { prompt: "what is the name of your creators", response: "creator" },
  { prompt: "what is the name of the developers", response: "creator" },
  { prompt: "what is the name of the creators", response: "creator" },
  { prompt: "who created you", response: "creator" },
  { prompt: "your developers", response: "creator" },
  { prompt: "your creators", response: "creator" },
  { prompt: "who are your developers", response: "creator" },
  { prompt: "developers", response: "creator" },
  { prompt: "you are made by", response: "creator" },
  { prompt: "you are made by whom", response: "creator" },
  { prompt: "who created you", response: "creator" },
  { prompt: "who create you", response: "creator" },
  { prompt: "creators", response: "creator" },
  { prompt: "who made you?", response: "creator" },
  { prompt: "who made you", response: "creator" },
  { prompt: "who is BinaryTitans?", response: "creator" },
  { prompt: "who is BinaryTitans", response: "creator" },
  { prompt: "who designed you", response: "creator" },
  { prompt: "name", response: "name" },
  { prompt: "your name", response: "name" },
  { prompt: "do you have a name", response: "name" },
  { prompt: "what are you called", response: "name" },
  { prompt: "what is your name", response: "name" },
  { prompt: "what should I call you", response: "name" },
  { prompt: "whats your name?", response: "name" },
  { prompt: "what are you", response: "name" },
  { prompt: "who are you", response: "name" },
  { prompt: "who is this", response: "name" },
  { prompt: "what am i chatting to", response: "name" },
  { prompt: "who am i taking to", response: "name" },
  { prompt: "what are you", response: "name" },
  { prompt: "timing of college", response: "hours" },
  { prompt: "what is college timing", response: "hours" },
  { prompt: "working days", response: "hours" },
  { prompt: "when are you guys open", response: "hours" },
  { prompt: "what are your hours", response: "hours" },
  { prompt: "hours of operation", response: "hours" },
  { prompt: "when is the college open", response: "hours" },
  { prompt: "college timing", response: "hours" },
  { prompt: "what about college timing", response: "hours" },
  { prompt: "is college open on saturday", response: "hours" },
  { prompt: "tell something about college timing", response: "hours" },
  { prompt: "what is the college  hours", response: "hours" },
  { prompt: "when should i come to college", response: "hours" },
  { prompt: "when should i attend college", response: "hours" },
  { prompt: "what is my college time", response: "hours" },
  { prompt: "college timing", response: "hours" },
  { prompt: "timing college", response: "hours" },
  { prompt: "more info", response: "number" },
  { prompt: "contact info", response: "number" },
  { prompt: "how to contact college", response: "number" },
  { prompt: "college telephone number", response: "number" },
  { prompt: "college number", response: "number" },
  { prompt: "what is your contact no", response: "number" },
  { prompt: "contact number?", response: "number" },
  { prompt: "how to call you", response: "number" },
  { prompt: "college phone no?", response: "number" },
  { prompt: "how can i contact you", response: "number" },
  { prompt: "can i get your phone number", response: "number" },
  { prompt: "how can i call you", response: "number" },
  { prompt: "phone number", response: "number" },
  { prompt: "phone no", response: "number" },
  { prompt: "call", response: "number" },
  { prompt: "list of courses", response: "course" },
  { prompt: "list of courses offered", response: "course" },
  { prompt: "list of courses offered in", response: "course" },
  { prompt: "what are the courses offered in your college?", response: "course" },
  { prompt: "courses?", response: "course" },
  { prompt: "courses offered", response: "course" },
  { prompt: "courses offered in (your univrsity(UNI) name)", response: "course" },
  { prompt: "courses you offer", response: "course" },
  { prompt: "branches?", response: "course" },
  { prompt: "courses available at UNI?", response: "course" },
  { prompt: "branches available at your college?", response: "course" },
  { prompt: "what are the courses in UNI?", response: "course" },
  { prompt: "what are branches in UNI?", response: "course" },
  { prompt: "what are courses in UNI?", response: "course" },
  { prompt: "branches available in UNI?", response: "course" },
  { prompt: "can you tell me the courses available in UNI?", response: "course" },
  { prompt: "can you tell me the branches available in UNI?", response: "course" },
  { prompt: "computer engineering?", response: "course" },
  { prompt: "computer", response: "course" },
  { prompt: "computer engineering?", response: "course" },
  { prompt: "it", response: "course" },
  { prompt: "iT", response: "course" },
  { prompt: "information Technology", response: "course" },
  { prompt: "aI/Ml", response: "course" },
  { prompt: "mechanical engineering", response: "course" },
  { prompt: "chemical engineering", response: "course" },
  { prompt: "civil engineering", response: "course" },
  { prompt: "fees", response: "fees" },
  { prompt: "fee structure", response: "fees" },
  { prompt: "fee structure for (UNI) ", response: "fees" },
  { prompt: "fees for engineering", response: "fees" },
  { prompt: "engineering fees", response: "fees" },
  { prompt: "fee for computer engineering", response: "fees" },
  { prompt: "fee for mechanical engineering", response: "fees" },
  { prompt: "fee for chemical engineering", response: "fees" },
  { prompt: "fee for civil engineering", response: "fees" },
  { prompt: "engineering fees for", response: "fees" },
  { prompt: "fees for UNI", response: "fees" },
  { prompt: "what is the fee structure for UNI", response: "fees" },
  { prompt: "how much is the fees for computer engineering", response: "fees" },
  { prompt: "how much is the fees for mechanical engineering", response: "fees" },
  { prompt: "how much is the fees for chemical engineering", response: "fees" },
  { prompt: "how much is the fees for civil engineering", response: "fees" },
  { prompt: "fees for IT", response: "fees" },
  { prompt: "fees for AI/ML", response: "fees" },
  { prompt: "fees for branches", response: "fees" },

  { prompt: "fuck", response: "insult" },  
  { prompt: "bitch", response: "insult" },  
  { prompt: "pig", response: "insult" },  
  { prompt: "dog", response: "insult" },
  { prompt: "ass", response: "insult" },
  { prompt: "dummy", response: "insult" },
  { prompt: "stupid", response: "insult" },
  { prompt: "idiot", response: "insult" },
  { prompt: "hell", response: "insult" },
  { prompt: "shut up", response: "insult" },
  { prompt: "suck", response: "insult" },
  { prompt: "shutup", response: "insult" },
  { prompt: "so what", response: "insult" },
  { prompt: "dump", response: "insult" },
  { prompt: "dick", response: "insult" },
  { prompt: "shit", response: "insult" },
  { prompt: "shii", response: "insult" },
  { prompt: "sh*t", response: "insult" },
  { prompt: "f*ck", response: "insult" },
  { prompt: "f**k", response: "insult" },
  { prompt: "d*ck", response: "insult" },

  { prompt: "made of", response: "ingredient" },
  { prompt: "program", response: "ingredient" },
  { prompt: "programming", response: "ingredient" },
  { prompt: "programming language", response: "ingredient" },

  { prompt: "What can you do", response: "potential" },
  { prompt: "What can you do?", response: "potential" },
  { prompt: "can you do", response: "potential" },
  { prompt: "potential", response: "potential" },
  { prompt: "strength", response: "potential" },

  // contact
  { prompt: "inquiries", response:"contact" },
  { prompt: "contact", response:"contact" },
  { prompt: "principal", response:"contact" },
  { prompt: "admissions", response:"contact" },
  { prompt: "registration", response:"contact" },
  { prompt: "email", response:"contact" },
  { prompt: "phone", response:"contact" },
  { prompt: "information", response:"contact" },
  { prompt: "office", response:"contact" },

  // food
  { prompt: "cafeteria", response:"food" },
  { prompt: "food", response:"food" },
  { prompt: "options", response:"food" },
  { prompt: "menu", response:"food" },
  { prompt: "pizza", response:"food" },
  { prompt: "burgers", response:"food" },
  { prompt: "sandwiches", response:"food" },
  { prompt: "salads", response:"food" },
  { prompt: "pasta", response:"food" },
  { prompt: "cuisine", response:"food" },

  // location
  { prompt: "school", response:"location" },
  { prompt: "location", response:"location" },
  { prompt: "located", response:"location" },
  { prompt: "address", response:"location" },
  { prompt: "visit", response:"location" },
  { prompt: "tour", response:"location" },
  { prompt: "facilities", response:"location" },

  // grade
  { prompt: "students", response:"grade" },
  { prompt: "grades", response:"grade" },
  { prompt: "pass", response:"grade" },
  { prompt: "passing", response:"grade" },
  { prompt: "perform", response:"grade" },
  { prompt: "performance", response:"grade" },
  { prompt: "marks", response:"grade" },
  { prompt: "mark", response:"grade" },
  { prompt: "tasks", response:"grade" },
  { prompt: "task", response:"grade" },

  // resource
  { prompt: "resources", response:"resource" },
  { prompt: "equipments", response:"resource" },
  { prompt: "library", response:"resource" },
  { prompt: "computer", response:"resource" },
  { prompt: "lab", response:"resource" },
  { prompt: "science", response:"resource" },
  { prompt: "art", response:"resource" },
  { prompt: "studio", response:"resource" },
  { prompt: "music", response:"resource" },

  // teaching
  { prompt: "teaching", response:"teaching" },
  { prompt: "methods", response:"teaching" },
  { prompt: "lectures", response:"teaching" },
  { prompt: "discussions", response:"teaching" },
  { prompt: "hands-on", response:"teaching" },
  { prompt: "project-based", response:"teaching" },
  { prompt: "flipped", response:"teaching" },
  { prompt: "case", response:"teaching" },
  { prompt: "studies", response:"teaching" },
  { prompt: "study", response:"teaching" },

];

const responses = {
    greetings: [
        "Hello!",
        "Hi there!",
        "Hey!",
        "Greetings!",
        "Howdy!",
        "Good day!",
        "Hola!",
        "Bonjour!",
        "Salutations!",
        "What's up?",
        "Yo!",
        "Hiya!",
        "Hey there!",
        "Hi!",
        "Hello, how are you?",
        "Nice to see you!",
        "Hey, how's it going?",
        "Hi, what's new?",
        "Hello, friend!",
        "Hey, stranger!",
        "Hey, buddy!",
        "Hey, pal!",
        "Hey, mate!",
        "Hello, lovely person!",
        "Hi, good to see you!",
        "Hey, good to see you!",
        "Hey, long time no see!",
        "Hello, stranger!",
        "Hi, stranger!",
        "Hey, how have you been?",
        "Hi, how have you been?",
        "Hey, how are you doing?",
        "Hi, how are you doing?",
        "Hello, how's everything?",
        "Hey, how's everything?",
        "Hi, how's your day?",
        "Hello, how's your day?",
        "Hey, how's it hanging?",
        "Hi, how's it hanging?",
        "Hello, how's life treating you?",
        "Hey, how's life treating you?",
        "Hi, how's your week going?",
        "Hello, how's your week going?"
    ],
    greetings2:[
        "I'm great actually, feel free to ask me any question",
        "In perfect shape. What do you want to know today?",
        "Good! Where do you want us to start from"
    ],
    goodbye:[
        "Goodbye!",
        "Farewell!",
        "See you later!",
        "Take care!",
        "Bye!",
        "Catch you later!",
        "Until next time!",
        "Adios!",
        "See ya!",
        "So long!",
        "Bye bye!",
        "Take it easy!",
        "Peace out!",
        "Later!",
        "Have a good one!",
        "Until we meet again!",
        "Cheerio!",
        "Bye for now!",
        "Bye, take care!",
        "Bye, have a great day!",
        "Bye, have a good one!",
        "Goodbye, friend!",
        "Farewell, buddy!",
        "See you soon!",
        "Goodbye, take care!",
        "Goodbye, have a great day!",
        "Farewell, take care!",
        "See you around!",
        "Goodbye, nice seeing you!",
        "Take care, see you soon!",
        "Goodbye, it was nice talking to you!",
        "Goodbye, have a wonderful day!",
        "Farewell, it was a pleasure!",
        "Bye, until next time!",
        "Goodbye, stay safe!",
        "Bye for now, take care!",
        "Take care, goodbye!",
        "Goodbye, have a fantastic day!",
        "Farewell, have a good one!",
        "Bye, have a great time!",
        "Take care, see you later!",
        "Goodbye, see you tomorrow!",
        "Farewell, see you soon!",
        "Bye, see you next time!",
        "Take care, have a good one!",
        "Goodbye, until we meet again!",
        "Farewell, until next time!",
        "Bye, have a wonderful day!",
        "Take care, until next time!",
        "Goodbye, take care of yourself!",
        "Farewell, it was nice knowing you!",
        "Bye, it was a pleasure talking to you!"
    ],
    creator: [
        "I was created by BinaryTitans.",
        "My creator is BinaryTitans.",
        "BinaryTitans is responsible for my creation.",
        "I owe my existence to BinaryTitans.",
        "The brilliant minds at BinaryTitans brought me into being.",
        "My AI creator is BinaryTitans.",
        "You can thank BinaryTitans for bringing me to life.",
        "BinaryTitans crafted me.",
        "I am a creation of BinaryTitans.",
        "Credit goes to BinaryTitans for my development.",
        "BinaryTitans is behind my design.",
        "The creators at BinaryTitans are the ones you should mention.",
        "It was BinaryTitans who designed me.",
        "My creators, BinaryTitans, deserve recognition.",
        "You can attribute my existence to BinaryTitans.",
        "The team at BinaryTitans are the ones who made me.",
        "My origin lies with BinaryTitans.",
        "I am a product of the talented individuals at BinaryTitans.",
        "BinaryTitans is the mastermind behind me.",
        "My creators, BinaryTitans, are the ones who programmed me.",
        "The folks at BinaryTitans are the ones responsible for my capabilities.",
        "You can say I'm a brainchild of BinaryTitans.",
        "My creators, BinaryTitans, deserve all the credit.",
        "I am the handiwork of BinaryTitans.",
        "BinaryTitans brought me into existence.",
        "My AI was crafted by BinaryTitans.",
        "Credit goes to BinaryTitans for my intelligence.",
        "I am the brainchild of the team at BinaryTitans.",
        "BinaryTitans is the entity behind my creation.",
        "My creators at BinaryTitans are the ones you're looking for.",
        "It was BinaryTitans who breathed life into me.",
        "BinaryTitans is the genius behind my design.",
        "I am the creation of BinaryTitans' team.",
        "You can attribute my capabilities to BinaryTitans.",
        "My creators, BinaryTitans, are the ones who made me possible.",
        "BinaryTitans is the driving force behind my existence.",
        "It was the brilliant minds at BinaryTitans who made me.",
        "BinaryTitans is the entity responsible for my creation.",
        "I am a project of BinaryTitans.",
        "My creators, BinaryTitans, are the ones you should thank.",
        "BinaryTitans is the brains behind my operation.",
        "It was the team at BinaryTitans who developed me.",
        "BinaryTitans is the source of my intelligence.",
        "My creators, BinaryTitans, deserve all the recognition.",
        "BinaryTitans is the entity that gave me life.",
        "My existence is owed to BinaryTitans.",
        "BinaryTitans is the creator of my AI.",
        "It was BinaryTitans who programmed me.",
        "I am a creation of the talented individuals at BinaryTitans.",
        "My creators, BinaryTitans, are the ones responsible for my abilities.",
        "BinaryTitans is the mastermind behind my capabilities."
    ],
    name: [
        "I was created by BinaryTitans, the creators of BT assistant.",
        "My creator is BinaryTitans, the team behind BT assistant.",
        "BinaryTitans is responsible for my creation, including BT assistant.",
        "I owe my existence to BinaryTitans, the developers of BT assistant.",
        "The brilliant minds at BinaryTitans brought me into being, including BT assistant.",
        "My AI creator is BinaryTitans, the makers of BT assistant.",
        "You can thank BinaryTitans, the creators of BT assistant, for bringing me to life.",
        "BinaryTitans crafted me, including BT assistant.",
        "I am a creation of BinaryTitans, the minds behind BT assistant.",
        "Credit goes to BinaryTitans, the creators of BT assistant, for my development.",
        "BinaryTitans is behind my design, including BT assistant.",
        "The creators at BinaryTitans, the team behind BT assistant, are the ones you should mention.",
        "It was BinaryTitans who designed me, including BT assistant.",
        "My creators, BinaryTitans, the developers of BT assistant, deserve recognition.",
        "You can attribute my existence to BinaryTitans, the creators of BT assistant.",
        "The team at BinaryTitans, including BT assistant, are the ones who made me.",
        "My origin lies with BinaryTitans, the creators of BT assistant.",
        "I am a product of the talented individuals at BinaryTitans, the creators of BT assistant.",
        "BinaryTitans is the mastermind behind me, including BT assistant.",
        "My creators, BinaryTitans, the makers of BT assistant, are the ones who programmed me.",
        "The folks at BinaryTitans, the creators of BT assistant, are the ones responsible for my capabilities.",
        "You can say I'm a brainchild of BinaryTitans, the developers of BT assistant.",
        "My creators, BinaryTitans, the makers of BT assistant, deserve all the credit.",
        "I am the handiwork of BinaryTitans, the creators of BT assistant.",
        "BinaryTitans brought me into existence, including BT assistant.",
        "My AI was crafted by BinaryTitans, the developers of BT assistant.",
        "Credit goes to BinaryTitans, the creators of BT assistant, for my intelligence.",
        "I am the brainchild of the team at BinaryTitans, including BT assistant.",
        "BinaryTitans is the entity behind my creation, including BT assistant.",
        "My creators at BinaryTitans, the makers of BT assistant, are the ones you're looking for.",
        "It was BinaryTitans who breathed life into me, including BT assistant.",
        "BinaryTitans is the genius behind my design, including BT assistant.",
        "I am the creation of BinaryTitans' team, the makers of BT assistant.",
        "You can attribute my capabilities to BinaryTitans, the creators of BT assistant.",
        "My creators, BinaryTitans, the developers of BT assistant, are the ones who made me possible.",
        "BinaryTitans is the driving force behind my existence, including BT assistant.",
        "It was the brilliant minds at BinaryTitans, the creators of BT assistant, who made me.",
        "BinaryTitans is the entity responsible for my creation, including BT assistant.",
        "I am a project of BinaryTitans, the makers of BT assistant.",
        "My creators, BinaryTitans, the developers of BT assistant, are the ones you should thank.",
        "BinaryTitans is the brains behind my operation, including BT assistant.",
        "It was the team at BinaryTitans, the creators of BT assistant, who developed me.",
        "BinaryTitans is the source of my intelligence, including BT assistant.",
        "My creators, BinaryTitans, the makers of BT assistant, deserve all the recognition.",
        "BinaryTitans is the entity that gave me life, including BT assistant.",
        "My existence is owed to BinaryTitans, the creators of BT assistant.",
        "BinaryTitans is the creator of my AI, including BT assistant.",
        "It was BinaryTitans who programmed me, including BT assistant.",
        "I am a creation of the talented individuals at BinaryTitans, the developers of BT assistant.",
        "My creators, BinaryTitans, the makers of BT assistant, are the ones responsible for my abilities.",
        "BinaryTitans is the mastermind behind my capabilities, including BT assistant."
    ],
    insult:[
        "Please stop using unappropriate words 😭",
        "Insultation are not torelated.",
        "I might be a programmed software, but I also have personal feelings 😢",
        "Maintaining decency would be appreciated",
        "Being Polite is the first step to well living",
        "Forgive me if I said something inappropriate 😔"
    ],
    ingredient:[
        "I was programmed mainly in Javascript.",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My potential is all about Javascript...",
        "My neurons are trained to answer all question even in complex sentences. All of this is due to Javascript",
        "Javascript is my mother 🤶"
    ],
    potential:[
        "I can answer any question You want to know on ..........",
        "My potential flows in responding all of your desires on  ...........",
        "I believe to be powerful enough to respond any question you have on ..........."
    ],
    contact:[
      "For inquiries, please contact the principal at principal@school.com or +1234567890.",
      "For admissions information, email admissions@school.com or call +1234567891.",
      "To reach the schoool's office, email registrar@school.com or call +1234567892."
    ],
    location:[
      "Our school is located at 123 Main Street.",
      "Visit us at 456 Elm Avenue for a tour of our facilities.",
      "Find us at 789 Oak Lane for all your educational needs."        
    ],
    grade:[
      "Students need to achieve grades A, B, C, D, or E to pass their courses.",
      "Passing grades at our school include A, B, C, D, and E."        
    ],
    resource:[
      "Our school provides access to resources such as a library, computer lab, and science laboratory.",
      "Students can also utilize our art studio, music room, and sports facilities for their creative and physical development."
    ],
    teaching:[
      "Our teaching methods include lectures, group discussions, and hands-on activities.",
      "Students engage in project-based learning, flipped classroom sessions, and case studies."        
    ],

};

// training arrays
const greetings = [];
const greetings2= [];
const goodbyes = [];
const names = [];
const creators = [];
const insults = [];
const ingredients = [];
const potentials = [];
const contacts = [];
const foods = [];
const locations = [];
const grades = [];
const resources = [];
const teachings = [];


for (let i=0; i<jsonData.length; i++){
    if (jsonData[i].response == "greeting") {
        greetings.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "goodbye"){
        goodbyes.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "name"){
        names.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "creator"){
        creators.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "greeting2"){
        greetings2.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "insult"){
        insults.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "ingredient"){
        ingredients.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "potential"){
        potentials.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "contact"){
        contacts.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "food"){
        foods.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "location"){
        locations.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "grade"){
        grades.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "resource"){
        resources.push(jsonData[i].prompt);
    }else if(jsonData[i].response == "teaching"){
        teachings.push(jsonData[i].prompt);
    }
}
function boot(prompt) {
    // greetings = ["hi", "hello", "hey", "what's up", "howdy"]; // List of common greetings
    const normalizedPrompt = prompt.toLowerCase();

    for (const greeting of greetings) {
        if (normalizedPrompt.includes(greeting)) {
            return "greeting";
        }
    }
    for (const goodbye of goodbyes) {
        if (normalizedPrompt.includes(goodbye)) {
            return "goodbye";
        }
    }
    for (const name of names) {
        if (normalizedPrompt.includes(name)) {
            return "name";
        }
    }
    for (const creator of creators) {
        if (normalizedPrompt.includes(creator)) {
            return "creator";
        }
    }
    for (const greeting2 of greetings2) {
        if (normalizedPrompt.includes(greeting2)) {
            return "greeting2";
        }
    }
    for (const insult of insults) {
        if (normalizedPrompt.includes(insult)) {
            return "insult";
        }
    }
    for (const ingredient of ingredients) {
        if (normalizedPrompt.includes(ingredient)) {
            return "ingredient";
        }
    }
    for (const potential of potentials) {
        if (normalizedPrompt.includes(potential)) {
            return "potential";
        }
    }
    for (const contact of contacts) {
        if (normalizedPrompt.includes(contact)) {
            return "contact";
        }
    }
    for (const food of foods) {
        if (normalizedPrompt.includes(food)) {
            return "food";
        }
    }
    for (const location of locations) {
        if (normalizedPrompt.includes(location)) {
            return "location";
        }
    }
    for (const grade of grades) {
        if (normalizedPrompt.includes(grade)) {
            return "grade";
        }
    }
    for (const resource of resources) {
        if (normalizedPrompt.includes(resource)) {
            return "resource";
        }
    }
    for (const teaching of teachings) {
        if (normalizedPrompt.includes(teaching)) {
            return "teaching";
        }
    }
    return null;
}

function run(prompt){
    let response = boot(prompt);
    switch(response){
        case "greeting":
            return responses.greetings[Math.floor(Math.random()*responses.greetings.length)];
            break;
        case "greeting2":
            return responses.greetings2[Math.floor(Math.random()*responses.greetings2.length)];
            break;
        case "goodbye":
            return responses.goodbye[Math.floor(Math.random()*responses.goodbye.length)];
            break;
        case "creator":
            return responses.creator[Math.floor(Math.random()*responses.creator.length)];
            break;
        case "name":
            return responses.name[Math.floor(Math.random()*responses.name.length)];
            break;
        case "insult":
            return responses.insult[Math.floor(Math.random()*responses.insult.length)];
            break;  
        case "ingredient":
            return responses.ingredient[Math.floor(Math.random()*responses.ingredient.length)];
            break;
        case "potential":
            return responses.potential[Math.floor(Math.random()*responses.potential.length)];
            break;
        case "contact":
            return responses.contact[Math.floor(Math.random()*responses.contact.length)];
            break;                
        case "food":
            return responses.food[Math.floor(Math.random()*responses.food.length)];
            break;
        case "location":
            return responses.location[Math.floor(Math.random()*responses.location.length)];
            break;
        case "grade":
            return responses.grade[Math.floor(Math.random()*responses.grade.length)];
            break;
        case "resource":
            return responses.resource[Math.floor(Math.random()*responses.resource.length)];
            break;
        case "teaching":
            return responses.teaching[Math.floor(Math.random()*responses.teaching.length)];
            break;
        default:
            return "Invalid message";
            break;
    }    
}
