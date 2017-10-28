var slides = [
    {
        "position" : "0 0 -8",
        "cameraPostion" : "0 -4.3 -8",
        "title" : "Design of alternative input methods for webVR to get virtual reality experiences",
        "text" : ["By Ramila (4NI14IS075) and Shubham Kumar (4NI14IS105)"]
    },
    {
        "position" : "10 -10 -8",
        "title" : "Contents",
        "cameraPostion": "10 -14.3 -8",
        "text" : ["Introduction", "AR/VR/MR: Future?", "webVR", "webVR: Significance", "Challenges", "A-Frame", "\"Legacy\" Inputs", "Possible alternative inputs", "Chanllenges faced, facing and waiting and possible hacks", "To be done"]
    },
    {
        "position" : "10 10 -8",
        "title" : "Introduction",
        "cameraPostion": "10 5.7 -8",
        "text" : ["Virtual Reality: Virtual Reality, commonly reffered to as VR, is an umbrella term for all immersive experiences. It involves but not limited to 360[degree] videos and images. It takes user to a virtual world and let it interact with the system from that world itself.", 
                 "Augmented Reality: Augemented Reality, or AR, is a way of representing content and interacting with system by invoking virtual objects to the real world. An example would be photo filters.",
                 "Mixed reality: It lies somewhere between Virtual Reality and Augmented Reality. It can be of various types. One interesting type is that of bringing real world object to the virtual world. It's also called hybrid reality as it uses both the concepts of AR and VR."]
    
    },
    {
        "position" : "20 0 -8",
        "title" : "AR/VR/MR: Future?",
        "cameraPostion" : "20 -4.3 -8",
        "text" : ["Virtual Reality is and is going to to be used in UI, gaming, simulations, cinematography etc.", 
                    "Augmented Reality is going to be used in gaming, notices, UI, photos, movies, cheap simulation etc",
                    "Mixed Reality is evolving and is considered to be used everywhere one can use the other two.",
                    "Essentially, all the three are a way to interact with systems. It's often said to be the next big thing and may replace the current interaction era, i.e. of bots, soon."]
    },
    {
        "position" : "-10 0 -8",
        "title" : "webVR",
        "cameraPostion" : "-10 -4.3 -8",
        "text" : ["webVR is a JavaScript API to create in-browser Virtual Reality experiences. It uses three.js and ultimately webGL to create a virtual experiences and render it inside the browser."]
    },
    {
        "position" : "-20 0 -8",
        "title" : "webVR: Significance",
        "cameraPostion" : "-20 -4.3 -8",
        "text" : ["webVR is considered the new webRTC.", 
                "It enables user to experience the virtual world from their browser itself.",
                "It makes Virtual Reality experiences cross platform.",
                "It is argued and intended to revolutionize the way we interact with web."]
    },
    {
        "position" : "-30 0 -8",
        "title" : "Challenges",
        "cameraPostion" : "-30 -4.3 -8",
        "text" : ["Virtual Reality is a comparitively new technology. It is in its myriad form.",
                "Over that, webVR itself is highly experimental.",
                "There are challenges to simulate the virtual world like physics, spatial audio/speech, input, simulatiom techniques, granularity etc.",
                "We will be taking input as on challenge."]
    },
    {
        "position" : "-50 0 -8",
        "title" : "A-Frame",
        "cameraPostion" : "-50 -4.3 -8",
        "text" : ["Developed by Mozilla", "It's an open source framework to create VR experiences.", 
                "It's more of a wrapper over webVR to simplify it, but with much more.", 
                "It parses the written code and uses webVR to create experiences.",
                "It makes it easier to experiment with webVR contents. Hence, we will be using it"]
    },
    {
        "position" : "-40 15 -3",
        "title" : "\"Legacy\" inputs",
        "cameraPostion" : "-40 10.7 -3",
        "text" : ["Text",
                "Radio Button",
                "Checkboxes",
                "Dropdowns",
                "Buttons",
                "Passwords",
                "Files"]
    },
    {
        "position" : "-50 15 -3",
        "title" : "Possible alternative inputs",
        "cameraPostion" : "-50 10.7 -3",
        "text" : ["Speech: WebSpeech (not supported on iOS)",
                "Images",
                "Raycaster (already implemented for clicks)",
                "3D Obkects",
                "3D Numpad",
                "Tap Code on a plane",
                "Extra hardwares"
                ]
    },
    {
        "position" : "-40 -20 -20",
        "title" : "Chanllenges faced, facing and waiting and possible hacks",
        "cameraPostion" : "-40 -24.3 -20",
        "text" : ["Browser compatibiltiy : iOS has poor compatibility. One solution is to use online agents. It'd be slow though",
                "File upload interface",
                "Hardware cost",
                "Variation in browser architecture",
                "Premature A-Frame/webVR (Movement, for example)",
                "Gesture and tap code requires a lot of memory (capturing the movement for long inside a browser)"]
    },
    {
        "position" : "40 -5 -5",
        "cameraPostion" : "40 -9.3 -5",
        "title" : "To be done",
        "text" : ["Password alternative", "Notifications inside VR (for OTP and others)", "File upload UI"]
    },
    {
        "position" : "50 -10 -10",
        "cameraPostion" : "50 -14.3 -10",
        "title" : "Contact and Contribute",
        "text" : ["Since, it is an open project, contributions and feedbacks are invited.",
                    "Telegram: https://t.me/namithubot", "GitHub: https://github.com/namithubot/VRInputs",
                    "Email: namithubot@yandex.com"]
    },
    {
        "position" : "30 30 30",
        "cameraPostion" : "30 25.7 30",
        "title" : "Thank you",
        "text" : ["For demo, open the link: https://namithubot.github.io/VRInputs/VR.html and put the carboard on",
                "Compatibity: Use Android devices with gyro and accelerometer"]
    }
]

var index = 0;

var socket = io();

slides.forEach(function(slide){
    // document.querySelector("#cameraWrapper").setAttribute('position', {x: 1, y: 1, z: 1});
    var title = document.createElement('a-text');
    title.setAttribute('position', slide.position)
    //title.setAttribute('align', 'center')
    title.setAttribute('color', 'yellow')
    title.setAttribute('width', '8')
    title.setAttribute('scale', '1.5 1.5 1.5')
    title.setAttribute('value', slide.title);
    document.getElementById('background').parentNode.appendChild(title);
    var textElem = document.createElement('a-text');
    textElem.setAttribute('position', slide.cameraPostion)
    //textElem.setAttribute('scale', '0.7 0.7 0.7')
    textElem.setAttribute('color', 'yellow')
    textElem.setAttribute('width', '7.5')
    // document.getElementsByTagName('a-text').forEach(function(elem){
    //     if(elem.id == "title") continue;
    //     elem.parentNode.removeChild(elem);
    // })
    var textString = ""
    slide.text.forEach(function(point){
        // var elem = document.createElement('a-text')
        // elem.value = point
        textString += "$ "+point + "\n\n"
    })
    console.log(textString);
    textElem.setAttribute('value', textString)
    document.getElementById('background').parentNode.appendChild(textElem)

    //var pos = slide.position.split(" ")
    //console.log(pos)
    //document.querySelector("#cameraWrapper").setAttribute('position', {x: parseInt(pos[0])+0.9, y: parseInt(pos[1])-3, z: parseInt(pos[2])+8});

});

function update(e, eventType){
    if(eventType=="arrowNext" || e.key == "p")
        index = index + 1
    else if(eventType=="arrowPrev" || e.key == "o")
        index = index - 1
    else
        return
    var pos = slides[index].position.split(" ")
    console.log(pos)
    // document.getElementById("transition").setAttribute('to',  {x: parseInt(pos[0])+0.9, y: parseInt(pos[1])-3, z: parseInt(pos[2])+8})
    // var e = new Event('nextSlide')
    // document.getElementById("transition").dispatchEvent(e)
    document.querySelector("#cameraWrapper").setAttribute('position', {x: parseInt(pos[0])+0.9, y: parseInt(pos[1])-3, z: parseInt(pos[2])+8});
    document.getElementById('next').setAttribute('position', {x: parseInt(pos[0])+10, y: parseInt(pos[1])-3, z: parseInt(pos[2])})
    document.getElementById('prev').setAttribute('position', {x: parseInt(pos[0])-2, y: parseInt(pos[1])-3, z: parseInt(pos[2])})

}

document.onkeypress = function(e){
   update(e, "keyPress");
   socket.emit('keyPressed'+e.key, e);
}

socket.on("keyPressedp", function(e){
    console.log('socket p')
    console.log(e)
    update(e, "arrowNext")
})

socket.on("keyPressedo", function(e){
     update('', "arrowPrev")
})

var pos = slides[0].position.split(" ")
document.querySelector("#cameraWrapper").setAttribute('position', {x: parseInt(pos[0])+0.9, y: parseInt(pos[1])-3, z: parseInt(pos[2])+8});

var arrowNext = document.createElement('a-collada-model');
arrowNext.setAttribute('src', 'arrow.dae');
arrowNext.setAttribute('scale', '0.3 0.5 0.5')
arrowNext.setAttribute('id', 'next')
var arrowPrev = document.createElement('a-collada-model');
arrowPrev.setAttribute('src', 'arrow.dae');
arrowPrev.setAttribute('scale', '0.3 0.5 0.5')
arrowPrev.setAttribute('rotation', '180 180 0')
arrowPrev.setAttribute('id', 'prev')
arrowNext.setAttribute('position', {x: parseInt(pos[0])+10, y: parseInt(pos[1])-3, z: parseInt(pos[2])})
arrowPrev.setAttribute('position', {x: parseInt(pos[0])-2, y: parseInt(pos[1])-3, z: parseInt(pos[2])})
document.getElementById("cameraWrapper").parentNode.appendChild(arrowNext)
document.getElementById("cameraWrapper").parentNode.appendChild(arrowPrev)

document.getElementById("next").addEventListener('click', function(e){
    console.log("clicked")
    update(e, "arrowNext")
})

document.getElementById("prev").addEventListener('click', function(e){
    update(e, "arrowPrev")
})

// var model = document.createElement('a-obj-model');
// model.setAttribute('src', 'destination-moon.obj')
// model.setAttribute('mtl', 'destination-mood.mtl')
// pos = slides[slides.length-1].position.split(" ")
// model.setAttribute('postion', slides[slides.length-1].position)