let allUsers = [];
let friendsList= [];

// Users Class
class Users {
    #name;
    #bio;
    #personality;
    #activities;
    #living;
    #goals;
    #image;

    constructor(name, bio, personality, activities, living, goals, image) {
        this.#name = name;
        this.#bio = bio;
        this.#personality = personality;
        this.#activities = activities;
        this.#living = living;
        this.#goals = goals;
        this.#image = image;
    }

    getName() {
        return this.#name;
    }

    getBio() {
        return this.#bio;
    }

    getPersonality() {
        return this.#personality;
    }

    getActivities() {
        return this.#activities;
    }

    getLiving() {
        return this.#living;
    }

    getGoals() {
        return this.#goals;
    }

    getImage() {
        return this.#image;
    }

    setName(name) {
        this.#name = name;
    }

    setBio(bio) {
        this.#bio = bio;
    }

    setPersonality(personality) {
        this.#personality = personality;
    }

    setActivities(activities) {
        this.#activities = activities;
    }

    setLiving(living) {
        this.#living = living;
    }

    setGoals(goals) {
        this.#goals = goals;
    }

    setImage(image) {
        this.#image = image;
    }

    getUserDetails() {
        return {
            Name: this.#name,
            Bio: this.#bio,
            Personality: this.#personality,
            Activities: this.#activities,
            Living: this.#living,
            Goals: this.#goals,
            Image: this.#image
        };
    }
}

const generateFakeUsers = () => {
    allUsers = [
        new Users(
            "Jenna MacDonald",
            "I'm a UBC student in second year who comes from Bangladesh. Some of my hobbies include going to the gym.",
            "Introverted",
            "Sports, Singing, Climbing, Swimming",
            "Commuter",
            "Make friends, Study buddy",
            "../images/jenna.jpg"
        ),
        new Users(
            "Alex Choi",
            "I’m a first-year engineering student originally from Toronto. I’m still adjusting to Vancouver and looking to meet people who enjoy chill activities.",
            "Jester",
            "Board games, Reading, Hiking",
            "On campus",
            "Make friends, Study buddy, Find community",
            "../images/alex.jpg"
        ),
        new Users(
            "Maria Hernandez",
            "Hi! I’m a fourth-year psychology student. I love exploring the city and chatting over coffee, and I’m hoping to meet some new friends along the way.",
            "Extroverted",
            "City exploration, Cooking, Volunteering, Hiking",
            "Commuter",
            "Meet new people, Mental health support",
            "../images/maria.jpg"
        ),
        new Users(
            "Liam Patel",
            "I’m a third-year computer science student who’s new to Vancouver. I enjoy outdoor activities on weekends and would love to connect with people who share similar interests.",
            "Ambiverted",
            "Hiking, Biking, Photography",
            "Commuter, With parents",
            "Social support, Find activity buddies",
            "../images/liam.jpg"
        ),
        new Users(
            "Sarah Lee",
            "I’m a second-year arts student and a night owl. I love music and movies, and I’m hoping to find some people to study with and hang out with.",
            "Creative",
            "Music, Painting, Movies",
            "On campus",
            "Make friends, Find a study group, Find community",
            "../images/sarah.png"
        ),
        new Users(
            "Ethan Zhang",
            "As a fourth-year biology major, I spend a lot of time in labs. I’m passionate about fitness and cooking, and I’m looking to meet more people outside my program.",
            "Extroverted",
            "Gym, Cooking, Running",
            "On campus",
            "Expand social circle, Meet like-minded people",
            "../images/ethan.png"
        ),
        new Users(
            "Emily Wright",
            "I’m a third-year English student from Vancouver. I love reading, trying new foods, and volunteering, and would like to meet people with similar interests.",
            "Ambiverted",
            "Reading, Exploring new restaurants, Volunteering",
            "Commuter",
            "Make friends, Find a support network",
            "../images/emily.jpg"
        )
    ];
};
