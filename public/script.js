// --- DATA ---
const prompts = {
    Character: {
        Realistic: [ "A weathered fisherman with laugh lines", "A young librarian with glasses perched on their nose", "A tired ER doctor on a night shift", "A street musician playing a worn-out guitar", "An urban sketcher capturing the city's soul", "A beekeeper tending to their hives in a field of wildflowers", "A barista who knows everyone's story", "A tailor fitting a suit in a dusty, sunlit shop", "An elderly woman feeding pigeons in a park", "A determined marathon runner at the finish line", "A child with a magnifying glass discovering an anthill", "A train conductor checking his pocket watch", "A park ranger looking out over a vast canyon", "A chef meticulously plating a complex dish", "A flower vendor on a bustling street corner", "A history professor lost in thought among ancient ruins", "A mechanic covered in grease, holding a wrench", "A skeptical journalist interviewing a local hero", "A teenager skateboarding at sunset", "A potter shaping clay on a wheel" ],
        "Semi-Realistic": [ "An urban elf in streetwear", "A cyborg detective with a trench coat", "A botanist who can talk to plants", "A pilot of a retro-futuristic airship", "A dream weaver who sells bottled dreams", "A technomancer with glowing circuits on their arms", "A shadow puppeteer whose creations are real", "An alchemist who turns memories into potions", "A star-charting navigator on a celestial ship", "A modern-day druid living on a skyscraper rooftop garden", "A time-traveling historian dressed in vintage clothes", "A golem made of scrap metal and forgotten technology", "A guardian spirit of a local library", "A sentient storm cloud in human form", "A cryptid researcher who has befriended their subject", "A musician whose violin can mend broken objects", "A candlemaker whose candles reveal glimpses of the future", "An oracle who communicates through graffiti", "A smuggler of rare, magical creatures", "A cartographer who maps shifting, impossible landscapes" ],
        Fantasy: [ "A dragon tamer with scales on their skin", "A gnome alchemist with bubbling potions", "An Orc chieftain seeking peace", "A cursed knight bound to a spectral sword", "A dryad whose hair is made of willow branches", "A dwarven blacksmith forging a legendary weapon", "A siren luring ships with a mournful song", "A goblin merchant with a cart full of strange trinkets", "A celestial cleric wielding solidified light", "A dark sorcerer performing a ritual under a blood moon", "A halfling adventurer cooking a stew over a campfire", "A griffin rider soaring above the clouds", "A troll guarding a crumbling, ancient bridge", "A necomancer raising a skeletal army", "An elven archer with eyes that see in the dark", "A fairy queen holding court in a mushroom circle", "A paladin whose shield glows with divine energy", "A satyr playing a flute in an enchanted forest", "A mermaid discovering a sunken treasure chest", "A powerful lich sitting on a throne of bones" ]
    },
    Environment: {
        Realistic: [ "A bustling Tokyo crosswalk at night", "A quiet, sun-drenched Italian villa", "A foggy morning on the Scottish moors", "The inside of a crowded, old bookstore", "A vibrant spice market in Marrakech", "A forgotten, overgrown greenhouse", "The neon-lit alley of a cyberpunk city", "A serene Japanese zen garden with a koi pond", "An abandoned amusement park, rusting and silent", "The chaotic energy of a Wall Street trading floor", "A cozy, fire-lit cabin during a snowstorm", "A sun-bleached pier on a quiet beach", "The grand, echoing interior of a cathedral", "A narrow, winding street in an old European town", "A university lecture hall, empty after class", "The view from a hot air balloon over Cappadocia", "A gritty, underground subway station", "A farmer's market overflowing with fresh produce", "A majestic, ancient redwood forest", "A rooftop view of Paris at dusk" ],
        "Sci-Fi": [ "A city in the shell of a colossal, sleeping beast", "A marketplace that floats on a sea of clouds", "An underwater city lit by bioluminescent coral", "A steampunk metropolis powered by captured lightning", "A generation ship drifting through a nebula", "An alien bazaar on a desert planet", "A terraforming station on a barren moon", "The crystalline interior of an asteroid mine", "A virtual reality landscape made of pure data", "An anti-gravity race track looping through skyscrapers", "A derelict space station in a decaying orbit", "A bio-luminescent jungle on a distant world", "A robot-run factory stretching to the horizon", "The bridge of a starship during a warp jump", "A city built on the rings of a gas giant", "A library containing the genetic code of extinct species", "A Dyson sphere under construction", "A floating research facility in the clouds of Venus", "A gateway to other dimensions, humming with energy", "A post-apocalyptic city reclaimed by nature and technology" ],
        Fantasy: [ "A library where every book is a portal", "A forest of crystalline trees that chime in the wind", "A desert where the sand is forgotten memories", "A mountain range that is the spine of a petrified god", "A wizard's tower that touches the stars", "The throne room of an underwater mer-kingdom", "A city carved into the heart of a giant mushroom", "The glowing, ethereal landscape of the Feywild", "A floating island held aloft by a giant crystal", "A dragon's lair filled with gold and ancient artifacts", "The crumbling ruins of a lost, giant civilization", "An enchanted swamp where will-o'-the-wisps dance", "A dwarven city built around a river of lava", "The Nine Hells, a landscape of fire and torment", "A celestial observatory on the highest peak of the world", "A hidden village of ninjas behind a waterfall", "The vast, windswept plains of the centaurs", "A magical university with floating staircases", "The inside of a genie's lamp", "A graveyard where ghosts dance at midnight" ]
    },
    ArtStyle: {
        Traditional: [ "in a vibrant, graffiti-inspired art style", "with the dramatic lighting of a Caravaggio painting", "using the minimalist elegance of Japanese ink wash (sumi-e)", "in the style of a 1920s Art Deco travel poster", "using a palette of only three colors", "in a dreamlike, surrealist landscape", "as a detailed, scientific botanical illustration", "with the fragmented perspective of Cubism", "using the vibrant, swirling colors of Van Gogh", "with the delicate line work of an Art Nouveau illustration", "in the style of a medieval illuminated manuscript", "with the soft, hazy light of Impressionism", "using the chaotic energy of a Jackson Pollock drip painting", "with the meticulous detail of a photorealistic painting", "as a charcoal sketch with expressive strokes", "with the bold outlines and flat colors of a woodblock print", "in the style of a classical fresco", "using layered paper to create a collage effect", "as a detailed ink cross-hatching illustration", "with the opaque, matte finish of gouache" ],
        Digital: [ "with the bold, clean lines of a comic book", "in the style of a vintage sci-fi pulp magazine cover", "as a gritty, noir film still", "using the bold, graphic shapes of Russian constructivism", "as a propaganda poster from a fictional dystopia", "in the style of a children's storybook", "in a clean, modern vector art style", "as a low-poly 3D render", "with the painterly look of a digital oil painting", "as a pixel art character sprite", "with the glowing lines of a futuristic UI design", "in a cel-shaded anime style", "as a concept art speedpaint with rough textures", "with the smooth gradients of a digital airbrush", "in a flat, minimalist infographic style", "as a photobashed piece with realistic elements", "with the glitchy, distorted effects of vaporwave", "in the style of a modern mobile game asset", "as a 2D animation character turnaround sheet", "with a textured, digital watercolor effect" ]
    },
    Conceptual: {
        Defined: [ "Illustrate the feeling of 'déjà vu'", "Visualize the weight of a secret", "Paint the architecture of a dream", "Depict the connection between music and memory", "Illustrate the internal struggle of a difficult decision", "What does the internet look like as a physical place?", "Visualize the feeling of being completely understood", "Paint a landscape based on your favorite emotion", "Illustrate the opposite of 'loneliness'", "Depict the moment of a breakthrough idea", "Visualize the 'calm before the storm'", "Illustrate the concept of 'growth' after hardship", "Paint the 'silence between two people'", "Visualize the journey of a single thought", "Depict the 'bittersweet' feeling of an ending", "Illustrate the 'organized chaos' of a creative mind", "Paint the 'comfort of solitude'", "Visualize the 'first spark of inspiration'", "Depict the 'heavy burden of responsibility'", "Illustrate 'unspoken understanding'" ],
        Vague: [ "Visualize the sound of silence", "Paint what 'hope' looks like as an object", "Depict 'chaos' and 'order' in one image", "Create a visual of a forgotten promise", "What does the last thought of a dying star look like?", "Visualize the concept of infinity", "What does the color blue feel like?", "Illustrate a melody", "Depict the edge of reality", "What is the shape of a memory?", "Paint the texture of a sound", "Visualize the concept of 'unseen forces'", "Illustrate the 'echo of a laugh'", "Depict a 'fading dream'", "What does a 'lost opportunity' look like?", "Visualize the 'gravity of a decision'", "Illustrate the concept of 'potential'", "Paint the 'fragrance of rain'", "Depict the 'weightlessness of a good idea'", "What is the 'geography of the soul'?" ]
    },
    Challenge: {
        Easy: [ "Create a scene using only a grayscale palette", "Use a continuous line to draw a complex scene", "Create a piece of art that fits inside a bottle cap", "Use your non-dominant hand to create a portrait", "Illustrate a scene from your favorite song", "Draw the same object from three completely different angles", "Design a book cover for a non-existent book", "Create a composition using only three colors", "Draw something from an ant's point of view", "Fill a page with as many tiny, detailed doodles as possible", "Create a pattern using only organic shapes", "Illustrate your favorite food", "Design a simple character using only circles", "Draw an object using only straight lines", "Create a symmetrical design", "Illustrate a single object in ten different styles", "Draw a portrait using only dots (stippling)", "Create an artwork inspired by a single word", "Design a simple logo for a fictional company", "Draw your hand in a dynamic pose" ],
        Normal: [ "Design a character using only geometric shapes", "Reimagine a famous painting in a futuristic setting", "Tell a story in a three-panel comic without words", "Design a vehicle for a fantasy world", "Create an artwork using only found textures (e.g., rubbings)", "Design a creature that lives in the clouds", "Illustrate a word without using the object it represents", "Create a composition where the negative space is the main subject", "Combine two unrelated animals into a new, believable creature", "Create an artwork that is also a functional map", "Design a piece of furniture for a non-human creature", "Illustrate a historical event in a modern art style", "Create a portrait using only typography", "Design a full tarot card (e.g., The Fool, The Magician)", "Illustrate a scene with extreme perspective (e.g., fisheye)", "Create a character design based on an inanimate object", "Depict a scene with two distinct light sources", "Animate a simple four-frame walk cycle", "Design a flag for a newly discovered planet", "Illustrate a complex machine with all its inner workings visible" ],
        Hard: [ "Draw your favorite animal as a mythological beast", "Tell a complex narrative in a single, detailed image", "Illustrate an abstract concept (like 'justice') as a character", "Design a full architectural blueprint for an impossible building", "Create a hyper-realistic drawing of a transparent object", "Paint a scene that takes place underwater and on fire simultaneously", "Design an entire alien ecosystem, including flora and fauna", "Illustrate a dream you had with complete accuracy", "Create a perfect visual palindrome (looks the same upside down)", "Depict the fourth dimension in a 2D space", "Paint a self-portrait reflecting your past, present, and future", "Design an entire alphabet for a fictional language", "Illustrate a scene containing at least five different, conflicting emotions", "Create a looping animation that tells a complete story", "Draw a crowd of 100 unique individuals", "Paint a realistic portrait using only colors you actively dislike", "Illustrate the entire history of the universe in one long, continuous panel", "Design a functional user interface for a technology that doesn't exist yet", "Create a photorealistic rendering of a mythical creature in a mundane setting", "Illustrate the concept of 'nothingness' without leaving the canvas blank" ]
    }
};
const categoryInfo = {
    Character: { emoji: '👤' }, Environment: { emoji: '🏞️' }, ArtStyle: { emoji: '🎨' }, Conceptual: { emoji: '💡' }, Challenge: { emoji: '🏆' }
};

// --- STATE & DOM ELEMENTS ---
let currentPrompt = '', currentCategory = '', currentSubCategory = null, currentBriefObject = null, savedData = JSON.parse(localStorage.getItem('inspiradi_saved_sparks')) || { "Uncategorized": [] };
let recentSparksHistory = [], recentBriefsHistory = [];
let flatPrompts = [];
let isBriefInEditMode = false;
let briefLimitData = { count: 0, date: null };
let previouslyFocusedElement = null;
const BRIEF_DAILY_LIMIT = 10;
const views = { home: document.getElementById('landing-view'), forge: document.getElementById('spark-forge-view'), brief: document.getElementById('generative-brief-view'), saved: document.getElementById('saved-sparks-view'), faq: document.getElementById('faq-view') };
const enterForgeBtn = document.getElementById('enter-forge-btn');
const promptDisplay = document.getElementById('prompt-display'), backBtn = document.getElementById('back-btn');
const saveModal = document.getElementById('save-modal'), moveModal = document.getElementById('move-modal'), confirmModal = document.getElementById('confirm-modal'), infoModal = document.getElementById('info-modal'), subCategoryModal = document.getElementById('sub-category-modal'), editSparkModal = document.getElementById('edit-spark-modal'), welcomeModal = document.getElementById('welcome-modal');
const categoryView = document.getElementById('category-view'), generationView = document.getElementById('generation-view');
const sidebar = document.getElementById('sidebar'), menuToggle = document.getElementById('menu-toggle'), menuOverlay = document.getElementById('menu-overlay');
const generationButtons = document.getElementById('generation-buttons');
const promptEditButtons = document.getElementById('prompt-edit-buttons');
const briefDisplay = document.getElementById('brief-display');
const briefButtonsContainer = document.getElementById('brief-buttons-container');
const aiButtonsExplanation = document.getElementById('ai-buttons-explanation');
const tosModal = document.getElementById('tos-modal');
const tosCheckbox = document.getElementById('tos-checkbox');
const tosAgreeBtn = document.getElementById('tos-agree-btn');
const tosDeclineBtn = document.getElementById('tos-decline-btn');
const tosFooterLink = document.getElementById('tos-footer-link');
const sparkHistoryContainer = document.getElementById('spark-history-container');
const historyList = document.getElementById('history-list');
const briefHistoryContainer = document.getElementById('brief-history-container');
const briefHistoryList = document.getElementById('brief-history-list');
const sparkOfTheDayContainer = document.getElementById('spark-of-the-day-container');
const foldersListContainer = document.getElementById('folders-list-container');
const randomCategoryBtn = document.getElementById('random-category-btn');
const briefLimitCounter = document.getElementById('brief-limit-counter');
const loadingSpinner = document.getElementById("loading-spinner");
const briefLoadingSpinner = document.getElementById("brief-loading-spinner");


// --- GEMINI API CALL (NEW VERSION) ---
// new signature: prompt, mode (e.g. 'elaborate'|'brief'), targetDisplay ('prompt'|'brief')
const callGeminiAPI = async (prompt, mode = 'elaborate', targetDisplay = 'prompt') => {
    const functionUrl = '/.netlify/functions/generate';
    const displayEl = targetDisplay === 'prompt' ? promptDisplay : briefDisplay;
    const spinner = targetDisplay === 'prompt' ? loadingSpinner : briefLoadingSpinner;
    spinner.classList.remove('hidden');

    try {
        // include mode in body so server function can vary behavior if needed
        const response = await fetch(functionUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, mode: mode })
        });

        if (!response.ok) {
            throw new Error(`API function failed with status: ${response.status}`);
        }
        const result = await response.json();
        if (result.error) {
            throw new Error(typeof result.error === 'string' ? result.error : JSON.stringify(result.error));
        }

        const candidate = result.candidates?.[0];
        if (candidate && candidate.content?.parts?.[0]?.text) {
        const text = candidate.content.parts[0].text;

        if (mode === "brief") {
        try {
            let cleanedText = text.trim();

            // remove ```json ... ``` wrappers if they exist
            if (cleanedText.startsWith("```")) {
                cleanedText = cleanedText.replace(/^```json/, "").replace(/^```/, "").replace(/```$/, "");
            }

            const brief = JSON.parse(cleanedText); // convert JSON string → object

            displayNewBrief(brief);         // render it nicely
            recentBriefsHistory.unshift(brief);
            if (recentBriefsHistory.length > 10) recentBriefsHistory.length = 10;
            return brief;
        } catch (err) {
            console.error("Failed to parse brief JSON:", err, text);
            throw new Error("AI response was not valid JSON for brief mode.");
        }
        } else {
            // elaborate/text mode
            displayNewPrompt({ text });
            return text;
        }
        } else {
            if (result.error) {
                console.error("API Error from function:", result.error);
                throw new Error(result.error.message || "Invalid response structure from API");
            }
            throw new Error("Invalid response structure from API");
        }
    } catch (error) {
        console.error("Error calling the serverless function:", error);
        const errorTarget = targetDisplay === 'prompt' ? promptDisplay : briefDisplay;
        errorTarget.innerHTML = `<p class="text-center" style="color: var(--c-danger);">The AI seems to be busy. Please try again in a moment.</p>`;
        if (targetDisplay === 'brief') currentBriefObject = null;
        return null;
    } finally {
        spinner.classList.add('hidden');
    }
};


// --- DATA LOGIC ---
function copyToClipboard(text, element) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard!');
}
function generateRandomPrompt(category, subCategory) {
    if (category === 'Random') {
        const randomCharSub = Object.keys(prompts.Character)[Math.floor(Math.random() * Object.keys(prompts.Character).length)];
        const subject = prompts.Character[randomCharSub][Math.floor(Math.random() * prompts.Character[randomCharSub].length)];
        const randomEnvSub = Object.keys(prompts.Environment)[Math.floor(Math.random() * Object.keys(prompts.Environment).length)];
        const setting = prompts.Environment[randomEnvSub][Math.floor(Math.random() * prompts.Environment[randomEnvSub].length)];
        const randomStyleSub = Object.keys(prompts.ArtStyle)[Math.floor(Math.random() * Object.keys(prompts.ArtStyle).length)];
        const style = prompts.ArtStyle[randomStyleSub][Math.floor(Math.random() * prompts.ArtStyle[randomStyleSub].length)];
        return `${subject}, in ${setting}, ${style}.`;
    }
    const categoryPrompts = subCategory ? prompts[category][subCategory] : prompts[category];
    return categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)] + '.';
}
const saveDataToStorage = () => localStorage.setItem('inspiradi_saved_sparks', JSON.stringify(savedData));
function addFolder(name) { 
    if (name && !savedData[name]) { 
        savedData[name] = []; 
        saveDataToStorage(); 
        renderFoldersAndPrompts(); 
        document.getElementById('new-folder-name').value = '';
        showToast(`Folder "${name}" created.`);
    } 
}
function renameFolder(o, n) { if(n && !savedData[n] && o !== n && o !== "Uncategorized"){ savedData[n] = savedData[o]; delete savedData[o]; saveDataToStorage(); renderFoldersAndPrompts(); } }
function deleteFolder(n) { 
    if(n && savedData[n] && n !== "Uncategorized"){ 
        delete savedData[n]; 
        saveDataToStorage(); 
        renderFoldersAndPrompts(); 
        showToast(`Folder "${n}" deleted.`, 'danger');
    } 
}
function savePromptToFolder(p, f) { 
    if(p && f && savedData[f] && !savedData[f].includes(p)){ 
        savedData[f].unshift(p); 
        saveDataToStorage(); 
        renderFoldersAndPrompts();
        showToast(`Spark saved to "${f}".`);
    } 
}
function deletePrompt(f, i) { if(savedData[f]?.[i]){ savedData[f].splice(i, 1); saveDataToStorage(); renderFoldersAndPrompts(); } }
function movePrompt(sF, sI, dF) { 
    if (savedData[sF]?.[sI] && savedData[dF]) { 
        const [p] = savedData[sF].splice(sI, 1); 
        savedData[dF].unshift(p); 
        saveDataToStorage(); 
        renderFoldersAndPrompts();
        showToast(`Spark moved to "${dF}".`);
    } 
}
function editSavedSpark(folder, index, newText) {
    if (savedData[folder]?.[index] && newText) {
        savedData[folder][index] = newText;
        saveDataToStorage();
        renderFoldersAndPrompts();
        showToast('Spark updated!');
    }
}

// --- UI & VIEW LOGIC ---
function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.add('hidden'));
    if(views[viewName]) views[viewName].classList.remove('hidden');
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(`nav-${viewName}`);
    if(activeLink) activeLink.classList.add('active');

    if(viewName === 'brief') {
        checkBriefLimit();
    }
}
function displayNewPrompt({ text, brief }) {
    promptDisplay.parentElement.classList.add('fade-out');
    setTimeout(() => {
        let newPromptText;
        if (brief) {
            currentBriefObject = brief;
            newPromptText = formatBriefForSaving(brief);
            renderCreativeBrief(brief, promptDisplay);
        } else {
            currentBriefObject = null;
            newPromptText = text;
            renderSimplePrompt(text);
        }

        if (newPromptText && !recentSparksHistory.includes(newPromptText)) {
            recentSparksHistory.unshift(newPromptText);
            if (recentSparksHistory.length > 10) recentSparksHistory.length = 10;
        }
        currentPrompt = newPromptText;

        updateGenerationViewUI();
        promptDisplay.parentElement.classList.remove('fade-out');
    }, 400);
}
function handleCategorySelection(category) {
    currentCategory = category;
    const categoryData = prompts[category];
    if (categoryData && typeof categoryData[Object.keys(categoryData)[0]] !== 'object') {
         startGeneration(category, null);
    } else {
        openSubCategoryModal(category);
    }
}
function startGeneration(category, subCategory) {
    currentCategory = category;
    currentSubCategory = subCategory;
    categoryView.classList.add('hidden');
    generationView.classList.remove('hidden');
    displayNewPrompt({ text: generateRandomPrompt(category, subCategory) });
}
function displayNewBrief(brief) {
    currentBriefObject = brief;
    isBriefInEditMode = false;
    renderCreativeBrief(currentBriefObject, briefDisplay);
    updateBriefViewButtons();
}
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg class="w-6 h-6" style="color: var(--c-success);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Success Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>${message}</span>`;
    if (type === 'danger') {
        toast.style.borderColor = 'var(--c-danger)';
        toast.querySelector('svg').style.color = 'var(--c-danger)';
    }
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

// --- RENDER LOGIC ---
function flattenPrompts() {
    if (flatPrompts.length > 0) return;
    Object.values(prompts).forEach(category => {
        if (Array.isArray(category)) {
            flatPrompts.push(...category);
        } else {
            Object.values(category).forEach(subCategory => {
                if(Array.isArray(subCategory)) flatPrompts.push(...subCategory);
            });
        }
    });
}
function renderSparkOfTheDay() {
    flattenPrompts();
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const dailyIndex = seed % flatPrompts.length;
    const spark = flatPrompts[dailyIndex] + '.';
    sparkOfTheDayContainer.innerHTML = `
        <div class="category-card p-6 rounded-2xl text-center">
            <h3 class="text-sm font-semibold uppercase tracking-wider mb-3" style="color: var(--c-text-secondary);">Spark of the Day</h3>
            <p class="text-lg font-medium mb-4">"${spark}"</p>
            <button id="save-daily-spark-btn" class="btn-secondary text-sm font-bold py-2 px-4 rounded-full">Save this Spark</button>
        </div>`;
    document.getElementById('save-daily-spark-btn').addEventListener('click', () => {
        currentPrompt = spark;
        currentBriefObject = null;
        openSaveModal();
    });
}
function renderCategories() {
    const grid = categoryView.querySelector('.grid');
    const categoriesToDisplay = Object.keys(categoryInfo);
    grid.innerHTML = (categoriesToDisplay.map(key => `
        <button class="category-card p-6 rounded-2xl text-left" data-category="${key}">
            <span class="text-4xl mb-3 block">${categoryInfo[key].emoji}</span>
            <h3 class="text-xl font-bold">${key}</h3>
        </button>`)).join('');
}

function renderSimplePrompt(text, isEditing = false) {
    if(isEditing) {
        promptDisplay.innerHTML = `<textarea id="prompt-textarea" class="edit-textarea w-full h-28 p-2 rounded-lg">${text}</textarea>`;
    } else {
         // Format text: split into paragraphs
        const paragraphs = text
            .split(/\n+/) // split on blank lines/newlines
            .map(p => `<p class="mb-4 leading-relaxed">${p.trim()}</p>`)
            .join('');

        promptDisplay.innerHTML = `
            <div class="text-lg sm:text-xl text-left font-medium break-words max-w-3xl mx-auto">
                ${paragraphs}
            </div>`;
    }
}
function renderCreativeBrief(brief, targetElement) {
    const palette = Array.isArray(brief.colorPalette) ? brief.colorPalette : [];
    const elements = Array.isArray(brief.keyElements) ? brief.keyElements : [];
    const listItems = (items) => items.map(item => `<li class="ml-4 list-disc">${item}</li>`).join('');

    if (isBriefInEditMode) {
        targetElement.innerHTML = `
        <div class="space-y-3 w-full">
            <input type="text" id="edit-brief-title" class="input-field w-full text-xl font-bold font-forge-title text-center" value="${brief.title || ''}">
            <div class="brief-item"><dt class="font-semibold">Subject</dt><textarea id="edit-brief-subject" class="input-field w-full min-h-[60px]">${brief.subject || ''}</textarea></div>
            <div class="brief-item"><dt class="font-semibold">Setting</dt><textarea id="edit-brief-setting" class="input-field w-full min-h-[60px]">${brief.setting || ''}</textarea></div>
            <div class="brief-item"><dt class="font-semibold">Mood</dt><input id="edit-brief-mood" type="text" class="input-field w-full" value="${brief.mood || ''}"></div>
            <div class="brief-item"><dt class="font-semibold">Art Style</dt><input id="edit-brief-artStyle" type="text" class="input-field w-full" value="${brief.artStyle || ''}"></div>
            <div class="brief-item"><dt class="font-semibold">Color Palette</dt><textarea id="edit-brief-colorPalette" class="input-field w-full">${palette.join(', ')}</textarea></div>
            <div class="brief-item"><dt class="font-semibold">Key Elements</dt><textarea id="edit-brief-keyElements" class="input-field w-full">${elements.join(', ')}</textarea></div>
        </div>`;
    } else {
         targetElement.innerHTML = `
            <h3 class="text-lg sm:text-xl font-bold font-forge-title mb-4 text-center">${brief.title || 'Creative Brief'}</h3>
            <dl class="space-y-3 text-sm sm:text-base">
                <div class="brief-item"><dt class="font-semibold">Subject</dt><dd class="break-words">${brief.subject || 'Not specified'}</dd></div>
                <div class="brief-item"><dt class="font-semibold">Setting</dt><dd class="break-words">${brief.setting || 'Not specified'}</dd></div>
                <div class="brief-item"><dt class="font-semibold">Mood</dt><dd class="break-words">${brief.mood || 'Not specified'}</dd></div>
                <div class="brief-item"><dt class="font-semibold">Art Style</dt><dd class="break-words">${brief.artStyle || 'Not specified'}</dd></div>
                <div class="brief-item"><dt class="font-semibold">Color Palette</dt><dd><ul>${listItems(palette)}</ul></dd></div>
                <div class="brief-item"><dt class="font-semibold">Key Elements</dt><dd><ul>${listItems(elements)}</ul></dd></div>
            </dl>
        `;
    }
}
function formatBriefForSaving(brief) {
    if (!brief) return "Invalid Brief";
    const title = brief.title || 'Untitled';
    const subject = brief.subject || 'N/A';
    const setting = brief.setting || 'N/A';
    const mood = brief.mood || 'N/A';
    const artStyle = brief.artStyle || 'N/A';
    const colorPalette = Array.isArray(brief.colorPalette) ? brief.colorPalette.join(', ') : 'N/A';
    const keyElements = Array.isArray(brief.keyElements) ? brief.keyElements.join(', ') : 'N/A';
    return `Title: ${title}\nSubject: ${subject}\nSetting: ${setting}\nMood: ${mood}\nArt Style: ${artStyle}\nColor Palette: ${colorPalette}\nKey Elements: ${keyElements}`;
}
 function updateGenerationViewUI(isEditing = false) {
    const currentCategoryDisplay = document.getElementById('current-category-display');
    currentCategoryDisplay.innerHTML = currentSubCategory 
        ? `Category: ${currentCategory} <span style="color: var(--c-text-secondary)">/ ${currentSubCategory}</span>` 
        : `Category: ${currentCategory}`;
    
    if (isEditing) {
        generationButtons.classList.add('hidden');
        promptEditButtons.classList.remove('hidden');
    } else {
        generationButtons.classList.remove('hidden');
        promptEditButtons.classList.add('hidden');

        let buttonsHtml = '';
        
        if (!currentBriefObject) {
            buttonsHtml = `
                <button id="spark-btn" class="btn-secondary w-full sm:w-auto font-bold py-3 px-6 rounded-full text-lg">Spark Again</button>
                <button id="elaborate-btn" class="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto font-bold py-3 px-6 rounded-full text-lg">
                    ✨ Elaborate
                </button>
                <button id="generate-brief-btn" class="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto font-bold py-3 px-6 rounded-full text-lg">
                    📜 Get Brief
                </button>`;
            aiButtonsExplanation.classList.remove('hidden');
            document.getElementById('edit-prompt-btn').classList.remove('hidden');
        } else {
            buttonsHtml = `
                <button id="spark-btn" class="btn-primary w-full sm:w-auto font-bold py-3 px-6 rounded-full text-lg">Spark Again</button>`;
            aiButtonsExplanation.classList.add('hidden');
            document.getElementById('edit-prompt-btn').classList.add('hidden');
        }
        
        buttonsHtml += `
            <button id="save-btn" class="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full text-lg">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Bookmark Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                Save
            </button>`;

        generationButtons.innerHTML = buttonsHtml;
    }
}

function updateBriefViewButtons() {
    let buttonsHtml = '';
    if (isBriefInEditMode) {
        buttonsHtml = `
            <button id="cancel-edit-brief-btn" class="btn-secondary font-bold py-3 px-8 rounded-full">Cancel</button>
            <button id="save-edit-brief-btn" class="btn-primary font-bold py-3 px-8 rounded-full">Save Changes</button>`;
    } else {
        const isDisabled = !currentBriefObject ? 'disabled' : '';
        buttonsHtml = `
            <button id="generate-random-brief-btn" class="btn-secondary flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full">📜 New Random Brief</button>
            <button id="edit-brief-btn" class="btn-primary flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full" ${isDisabled}>✏️ Edit Brief</button>
            <button id="save-brief-btn" class="btn-secondary flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full" ${isDisabled}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Bookmark Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                Save
            </button>`;
    }
    briefButtonsContainer.innerHTML = buttonsHtml;
}

function renderFoldersAndPrompts() {
    const hasSavedSparks = Object.keys(savedData).some(key => savedData[key].length > 0);

    if (!hasSavedSparks) {
        foldersListContainer.innerHTML = `
            <div class="text-center p-8 category-card rounded-2xl">
                <svg class="w-16 h-16 mx-auto mb-4" style="color: var(--c-text-secondary);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                <h3 class="text-xl font-bold mb-2">Your saved ideas will live here</h3>
                <p class="mb-4" style="color: var(--c-text-secondary);">Save your favorite sparks so you never lose them.</p>
                <button id="empty-state-forge-btn" class="btn-primary font-bold py-2 px-6 rounded-full">Find Your First Spark!</button>
            </div>`;
        return;
    }

    if (!document.getElementById('folders-list')) {
        foldersListContainer.innerHTML = `
            <div class="flex flex-col sm:flex-row items-center gap-2 mb-6">
                <input type="text" id="new-folder-name" class="input-field w-full sm:flex-1 rounded-lg p-3 outline-none" placeholder="New folder name...">
                <button id="add-folder-btn" class="btn-primary w-full sm:w-auto font-bold py-3 px-6 rounded-lg transition-colors">Create Folder</button>
            </div>
            <div id="folders-list" class="space-y-4"></div>`;
    }
    
    const foldersListEl = document.getElementById('folders-list');
    foldersListEl.innerHTML = Object.keys(savedData).map(folderName => {
        if (savedData[folderName].length === 0 && folderName !== "Uncategorized") return '';
        const promptsHtml = savedData[folderName].length > 0
            ? savedData[folderName].map((p, i) => {
                const isBrief = p.startsWith('Title:');
                let contentHtml = '';
                if (isBrief) {
                     const briefObj = {};
                     p.split('\n').forEach(line => {
                        const parts = line.split(': ');
                        if(parts.length === 2) {
                            const key = parts[0].toLowerCase().replace(/ /g, '');
                            if(key === 'colorpalette' || key === 'keyelements') {
                                briefObj[key] = parts[1].split(', ');
                            } else {
                                briefObj[key] = parts[1];
                            }
                        }
                     });
                     const palette = Array.isArray(briefObj.colorpalette) ? briefObj.colorpalette : [];
                     const elements = Array.isArray(briefObj.keyelements) ? briefObj.keyelements : [];
                     const listItems = (items) => items.map(item => `<li class="ml-4 list-disc text-sm">${item}</li>`).join('');
                     
                     contentHtml = `<div class="text-left w-full"><h4 class="font-bold text-base mb-2">${briefObj.title}</h4>
                     <dl class="text-sm space-y-1">
                        <div class="brief-item"><dt class="font-semibold inline">Subject: </dt><dd class="inline">${briefObj.subject}</dd></div>
                        <div class="brief-item"><dt class="font-semibold inline">Setting: </dt><dd class="inline">${briefObj.setting}</dd></div>
                        <div class="brief-item"><dt class="font-semibold inline">Mood: </dt><dd class="inline">${briefObj.mood}</dd></div>
                        <div class="brief-item"><dt class="font-semibold inline">Art Style: </dt><dd class="inline">${briefObj.artstyle}</dd></div>
                        <div class="brief-item"><dt class="font-semibold">Color Palette: </dt><dd><ul>${listItems(palette)}</ul></dd></div>
                        <div class="brief-item"><dt class="font-semibold">Key Elements: </dt><dd><ul>${listItems(elements)}</ul></dd></div>
                     </dl></div>`;
                } else {
                    contentHtml = `<span class="flex-1 mr-4">${p}</span>`;
                }

                return `<li class="saved-item flex justify-between items-center p-4 group border-b last:border-b-0" style="border-color: var(--c-border);">
                    ${contentHtml}
                    <div class="flex items-center gap-2 sm:gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="edit-saved-prompt-btn folder-item-summary-btn edit" data-folder="${folderName}" data-index="${i}" title="Edit prompt" aria-label="Edit this saved spark">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Edit Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L13.196 5.196z"></path></svg>
                        </button>
                        <button class="copy-saved-prompt-btn folder-item-summary-btn copy" data-folder="${folderName}" data-index="${i}" title="Copy prompt" aria-label="Copy this saved spark to clipboard">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Copy Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                        </button>
                        <button class="move-prompt-btn folder-item-summary-btn rename" data-folder="${folderName}" data-index="${i}" title="Move prompt" aria-label="Move this spark to another folder"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Move Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg></button>
                        <button class="delete-prompt-btn folder-item-summary-btn delete" data-folder="${folderName}" data-index="${i}" title="Delete prompt" aria-label="Delete this spark"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Delete Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                    </div>
                </li>`;
            }).join('')
            : `<li class="p-4" style="color: var(--c-text-secondary);">This folder is empty.</li>`;
        
        const uncategorizedInfo = `
            <div class="relative group flex items-center ml-1">
                <svg class="w-5 h-5 cursor-help" style="color: var(--c-text-secondary);" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Information about Uncategorized folder"><title>Information Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 modal-content text-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    This is the default folder for saving sparks. It cannot be renamed or deleted.
                    <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8" style="border-top-color: var(--c-bg-secondary);"></div>
                </div>
            </div>`;

        return `
            <div class="folder-container rounded-xl">
                <details ${folderName === "Uncategorized" ? 'open' : ''}>
                    <summary class="flex justify-between items-center cursor-pointer group p-4">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 details-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title>Expand/Collapse Arrow</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                            <h3 class="font-bold text-lg">${folderName}</h3>
                            ${folderName === "Uncategorized" ? uncategorizedInfo : ''}
                        </div>
                        ${folderName !== "Uncategorized" ? `
                        <div class="flex items-center gap-3">
                            <button class="rename-folder-btn folder-item-summary-btn rename text-sm" data-folder="${folderName}">Rename</button>
                            <button class="delete-folder-btn folder-item-summary-btn delete text-sm" data-folder="${folderName}">Delete</button>
                        </div>` : ''}
                    </summary>
                    <ul class="pt-2 mt-2 pl-8 border-l border-t" style="border-color: var(--c-border);">${promptsHtml}</ul>
                </details>
            </div>`;
    }).join('');
}

// --- MODAL LOGIC ---
const closeModal = (modal) => {
    const wrapper = modal.querySelector('.modal-content-wrapper');
    modal.removeEventListener('keydown', handleFocusTrap);
    if (wrapper) {
        wrapper.parentElement.classList.add('hidden');
    } else {
         modal.classList.add('hidden');
    }
    if(previouslyFocusedElement) previouslyFocusedElement.focus();
};
function openModal(modal) {
    previouslyFocusedElement = document.activeElement;
    const wrapper = modal.querySelector('.modal-content-wrapper');
    if (wrapper) {
        wrapper.parentElement.classList.remove('hidden');
    } else {
         modal.classList.remove('hidden');
    }
    modal.addEventListener('keydown', handleFocusTrap);
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    if(firstFocusableElement) firstFocusableElement.focus();
}
function handleFocusTrap(e) {
    const focusableElements = this.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
}
function showInfoModal(message) {
    infoModal.innerHTML = `<div class="modal-content-wrapper"><div class="modal-content rounded-2xl p-6 w-full max-w-sm shadow-2xl"><p class="text-center text-lg mb-6">${message}</p><div class="flex justify-center gap-4"><button id="info-ok" class="btn-primary font-bold py-2 px-6 rounded-lg">OK</button></div></div></div>`;
    openModal(infoModal);
    document.getElementById('info-ok').onclick = () => closeModal(infoModal);
}
function openSubCategoryModal(category) {
    const subCategories = Object.keys(prompts[category]);
    const buttonsHtml = subCategories.map(sub => `<button class="sub-category-btn w-full text-left btn-secondary p-3 rounded-lg" data-sub-category="${sub}">${sub}</button>`).join('');
    subCategoryModal.innerHTML = `
        <div class="modal-content-wrapper">
            <div class="modal-content rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
                <button id="sub-category-close-btn" class="absolute top-4 right-4" aria-label="Close sub-category selection">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Close Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h3 class="text-xl font-bold mb-4">Select a Style for ${category}</h3>
                <div class="space-y-2">${buttonsHtml}</div>
            </div>
        </div>`;
    openModal(subCategoryModal);
}
function openSaveModal() {
    const promptToSave = (currentBriefObject) ? formatBriefForSaving(currentBriefObject) : currentPrompt;
    if (!promptToSave) return;
    const folderOptions = Object.keys(savedData).map(name => `<li><button data-folder="${name}" class="save-to-folder-btn w-full text-left btn-secondary p-3 rounded-lg">${name}</button></li>`).join('');
    saveModal.innerHTML = `<div class="modal-content-wrapper"><div class="modal-content rounded-2xl p-6 w-full max-w-md shadow-2xl relative"><button id="modal-close-btn" class="absolute top-4 right-4" aria-label="Close save dialog"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Close Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><h3 class="text-xl font-bold mb-4">Save to Folder</h3><ul class="space-y-2 max-h-48 overflow-y-auto pr-2 mb-4">${folderOptions}</ul><div class="border-t pt-4" style="border-color: var(--c-border);"><h4 class="font-semibold mb-2">Or create new folder:</h4><div class="flex gap-2"><input type="text" id="modal-new-folder-name" class="input-field flex-1 rounded-lg p-2 outline-none" placeholder="New folder..."><button id="modal-create-and-save-btn" class="btn-primary font-bold py-2 px-4 rounded-lg">Create & Save</button></div></div></div></div>`;
    openModal(saveModal);
}
function openMoveModal(sourceFolder, sourceIndex) {
    const promptToMove = savedData[sourceFolder][sourceIndex];
    const destFolders = Object.keys(savedData).filter(f => f !== sourceFolder);
    let folderOptions = destFolders.length > 0 ? destFolders.map(name => `<li><button class="move-to-folder-btn w-full text-left btn-secondary p-3 rounded-lg" data-dest-folder="${name}">${name}</button></li>`).join('') : `<li class="p-3" style="color: var(--c-text-secondary);">Create another folder to move this to.</li>`;
    moveModal.innerHTML = `<div class="modal-content-wrapper"><div class="modal-content rounded-2xl p-6 w-full max-w-md shadow-2xl relative" data-source-folder="${sourceFolder}" data-source-index="${sourceIndex}"><button id="move-modal-close-btn" class="absolute top-4 right-4" aria-label="Close move dialog"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><title>Close Icon</title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button><h3 class="text-xl font-bold mb-1">Move Spark</h3><p class="text-sm mb-4 truncate italic" style="color: var(--c-text-secondary);">"${promptToMove}"</p><h4 class="text-base font-semibold mb-2">Select destination:</h4><ul class="space-y-2 max-h-60 overflow-y-auto pr-2">${folderOptions}</ul></div></div>`;
    openModal(moveModal);
}
function showConfirmModal(message, onConfirm) {
    confirmModal.innerHTML = `<div class="modal-content-wrapper"><div class="modal-content rounded-2xl p-6 w-full max-w-sm shadow-2xl"><p class="text-center text-lg mb-6">${message}</p><div class="flex justify-center gap-4"><button id="confirm-cancel" class="btn-secondary font-bold py-2 px-6 rounded-lg">Cancel</button><button id="confirm-ok" class="btn-danger font-bold py-2 px-6 rounded-lg">Confirm</button></div></div></div>`;
    openModal(confirmModal);
    document.getElementById('confirm-ok').onclick = () => { onConfirm(); closeModal(confirmModal); };
    document.getElementById('confirm-cancel').onclick = () => closeModal(confirmModal);
}
function openEditSparkModal(folder, index) {
    const sparkText = savedData[folder][index];
    editSparkModal.innerHTML = `
        <div class="modal-content-wrapper">
            <div class="modal-content rounded-2xl p-6 w-full max-w-lg shadow-2xl relative">
                <h3 class="text-xl font-bold mb-4">Edit Spark</h3>
                <textarea id="edit-spark-textarea" class="edit-textarea w-full h-40 p-2 rounded-lg">${sparkText}</textarea>
                <div class="flex justify-end gap-4 mt-4">
                    <button id="edit-spark-cancel" class="btn-secondary font-bold py-2 px-6 rounded-lg">Cancel</button>
                    <button id="edit-spark-save" class="btn-primary font-bold py-2 px-6 rounded-lg">Save</button>
                </div>
            </div>
        </div>`;
    openModal(editSparkModal);
    
    document.getElementById('edit-spark-save').onclick = () => {
        const newText = document.getElementById('edit-spark-textarea').value;
        editSavedSpark(folder, index, newText);
        closeModal(editSparkModal);
    };
    document.getElementById('edit-spark-cancel').onclick = () => closeModal(editSparkModal);
}
function showWelcomeModal() {
    welcomeModal.innerHTML = `
        <div class="modal-content-wrapper">
            <div class="modal-content rounded-2xl p-6 w-full max-w-md shadow-2xl text-center">
                <svg width="64" height="64" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-4">
                    <title>Inspiradi Logo</title>
                    <g>
                        <path d="M64 128 C64 128 112.2 92.5 86.8 63.7 C74.1 49.3 54.9 62.6 64 82.2 C73.1 62.6 92.3 49.3 79.6 63.7 C54.2 92.5 104.4 128 64 128 Z" fill="#2E42A8"/>
                        <path d="M64 128 C64 128 15.8 92.5 41.2 63.7 C53.9 49.3 73.1 62.6 64 82.2 C54.9 62.6 35.7 49.3 48.4 63.7 C73.8 92.5 23.6 128 64 128 Z" fill="#26388F"/>
                        <path d="M64 0 C64 0 15.8 35.5 41.2 64.3 C53.9 78.7 73.1 65.4 64 45.8 C54.9 65.4 35.7 78.7 48.4 64.3 C23 35.5 64 0 64 0 Z" fill="#4B90E0"/>
                        <path d="M64 0 C64 0 112.2 35.5 86.8 64.3 C74.1 78.7 54.9 65.4 64 45.8 C73.1 65.4 92.3 78.7 79.6 64.3 C105 35.5 64 0 64 0 Z" fill="#4381CB"/>
                        <path d="M64 44.1 L41.2 64.3 C48.4 78.7 54.9 65.4 64 45.8 C73.1 65.4 79.6 78.7 86.8 64.3 L64 44.1 Z" fill="#FFFFFF"/>
                        <path d="M64 83.9 L41.2 63.7 C48.4 49.3 54.9 62.6 64 82.2 C73.1 62.6 79.6 49.3 86.8 63.7 L64 83.9 Z" fill="#FFFFFF"/>
                        <path d="M64 22.1 C64 22.1 78.4 1.3 70.2 11.4 C62 21.6 64 22.1 64 22.1 Z" fill="#D83A8F"/>
                        <path d="M64 22.1 C64 22.1 49.6 1.3 57.8 11.4 C66 21.6 64 22.1 64 22.1 Z" fill="#C22A7F"/>
                    </g>
                </svg>
                <h2 class="text-2xl font-bold font-brand mb-2">Welcome to Inspiradi!</h2>
                <p class="mb-6" style="color: var(--c-text-secondary);">Your new partner in overcoming creative blocks. Let's find your next great idea.</p>
                <button id="welcome-ok-btn" class="btn-primary font-bold py-2 px-8 rounded-full">Let's Go!</button>
            </div>
        </div>`;
    openModal(welcomeModal);

    document.getElementById('welcome-ok-btn').onclick = () => {
        localStorage.setItem('inspiradi_welcomed', 'true');
        closeModal(welcomeModal);
        if (!localStorage.getItem('inspiradi_tos_agreed')) {
            openModal(tosModal);
        }
    };
}

// --- THEME LOGIC ---
const themeButtons = document.querySelectorAll('.theme-btn');
function setTheme(theme) {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('inspiradi_theme', theme);
    themeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.theme === theme));
}
themeButtons.forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.theme)));
function loadTheme() {
    const savedTheme = localStorage.getItem('inspiradi_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) setTheme(savedTheme);
    else if (prefersDark) setTheme('dark');
    else setTheme('light');
}

// --- EVENT LISTENERS ---
const navLinks = { home: 'home', forge: 'forge', brief: 'brief', saved: 'saved', faq: 'faq' };
Object.keys(navLinks).forEach(id => {
    const element = document.getElementById(`nav-${id}`);
    if (element) {
        element.addEventListener('click', (e) => { 
            e.preventDefault();
            switchView(navLinks[id]);
            closeMenu(); 
        });
    }
});
document.getElementById('nav-header-home-link').addEventListener('click', (e) => { e.preventDefault(); switchView('home'); });
enterForgeBtn.addEventListener('click', () => switchView('forge'));

generationButtons.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    if (target.id === 'spark-btn') {
        displayNewPrompt({ text: generateRandomPrompt(currentCategory, currentSubCategory) });
    } else if (target.id === 'elaborate-btn') {
        if (currentPrompt) callGeminiAPI(currentPrompt, 'elaborate', 'prompt');
    } else if (target.id === 'generate-brief-btn') {
        if (currentPrompt) callGeminiAPI(currentPrompt, 'brief', 'brief');
    } else if (target.id === 'save-btn') {
        openSaveModal();
    }
});

briefButtonsContainer.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    if (target.id === 'generate-random-brief-btn') {
        if (checkBriefLimit()) {
            const creativeInstruction = "Generate a completely random, unique, and visually interesting art prompt suitable for a creative brief. The theme can be fantasy, sci-fi, surreal, or anything that would inspire an artist.";
            callGeminiAPI(creativeInstruction, 'brief', 'brief').then(() => {
                briefLimitData.count++;
                localStorage.setItem('inspiradi_brief_limit', JSON.stringify(briefLimitData));
                updateBriefLimitCounter();
            });
        }
    } else if (target.id === 'save-brief-btn') {
        const briefToSave = currentBriefObject ? formatBriefForSaving(currentBriefObject) : null;
        if(briefToSave) {
            currentPrompt = briefToSave;
            openSaveModal();
        }
    } else if (target.id === 'edit-brief-btn') {
        isBriefInEditMode = true;
        renderCreativeBrief(currentBriefObject, briefDisplay);
        updateBriefViewButtons();
    } else if (target.id === 'save-edit-brief-btn') {
        const newBrief = {
            title: document.getElementById('edit-brief-title').value,
            subject: document.getElementById('edit-brief-subject').value,
            setting: document.getElementById('edit-brief-setting').value,
            mood: document.getElementById('edit-brief-mood').value,
            artStyle: document.getElementById('edit-brief-artStyle').value,
            colorPalette: document.getElementById('edit-brief-colorPalette').value.split(',').map(s => s.trim()).filter(Boolean),
            keyElements: document.getElementById('edit-brief-keyElements').value.split(',').map(s => s.trim()).filter(Boolean),
        };
        displayNewBrief(newBrief);
        showToast('Brief updated!');
    } else if (target.id === 'cancel-edit-brief-btn') {
        isBriefInEditMode = false;
        renderCreativeBrief(currentBriefObject, briefDisplay);
        updateBriefViewButtons();
    }
});

document.getElementById('copy-prompt-btn').addEventListener('click', (e) => {
    if(currentPrompt) copyToClipboard(currentPrompt);
});
 document.getElementById('copy-brief-btn').addEventListener('click', (e) => {
    const briefToCopy = currentBriefObject ? formatBriefForSaving(currentBriefObject) : null;
    if(briefToCopy) copyToClipboard(briefToCopy);
});

sparkHistoryContainer.addEventListener('toggle', () => {
    if (sparkHistoryContainer.open) {
        historyList.innerHTML = recentSparksHistory.map(p => `<li class="p-2 rounded-md hover:bg-gray-700/50 cursor-pointer break-words border-b border-gray-700 last:border-b-0">${p}</li>`).join('') || `<li class="p-2 text-sm" style="color:var(--c-text-secondary)">Your recent sparks will appear here.</li>`;
    }
});
historyList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI' && e.target.textContent) {
        displayNewPrompt({ text: e.target.textContent });
    }
});
briefHistoryContainer.addEventListener('toggle', () => {
    if (briefHistoryContainer.open) {
         briefHistoryList.innerHTML = recentBriefsHistory.map((b, i) => `<li class="brief-history-item p-2 rounded-md hover:bg-gray-700/50 cursor-pointer break-words border-b border-gray-700 last:border-b-0" data-index="${i}">${b.title || 'Untitled Brief'}</li>`).join('') || `<li class="p-2 text-sm" style="color:var(--c-text-secondary)">Your recent briefs will appear here.</li>`;
    }
});
briefHistoryList.addEventListener('click', (e) => {
    const item = e.target.closest('.brief-history-item');
    if(item) {
        const brief = recentBriefsHistory[parseInt(item.dataset.index)];
        if (brief) displayNewBrief(brief);
    }
});
document.getElementById('edit-prompt-btn').addEventListener('click', () => {
    renderSimplePrompt(currentPrompt, true);
    updateGenerationViewUI(true);
});
promptEditButtons.addEventListener('click', e => {
    const target = e.target.closest('button');
    if (!target) return;
    if (target.id === 'save-prompt-edit-btn') {
        const newText = document.getElementById('prompt-textarea').value;
        currentPrompt = newText;
        renderSimplePrompt(newText);
        updateGenerationViewUI(false);
        showToast('Inspiration updated!');
    } else if (target.id === 'cancel-prompt-edit-btn') {
        renderSimplePrompt(currentPrompt);
        updateGenerationViewUI(false);
    }
});


backBtn.addEventListener('click', () => {
    generationView.classList.add('hidden');
    categoryView.classList.remove('hidden');
});

categoryView.addEventListener('click', e => { 
    const btn = e.target.closest('.category-card'); 
    if (btn) handleCategorySelection(btn.dataset.category); 
});
randomCategoryBtn.addEventListener('click', () => startGeneration('Random', null));

subCategoryModal.addEventListener('click', (e) => {
    if (e.target === subCategoryModal || e.target.closest('#sub-category-close-btn')) {
        closeModal(subCategoryModal);
        return;
    }
    const btn = e.target.closest('.sub-category-btn');
    if(btn) {
        startGeneration(currentCategory, btn.dataset.subCategory);
        closeModal(subCategoryModal);
    }
});

document.body.addEventListener('click', e => {
    if(e.target.id === 'empty-state-forge-btn') switchView('forge');
    if(e.target.id === 'add-folder-btn') {
        const newFolderNameInput = document.getElementById('new-folder-name');
        if(newFolderNameInput) addFolder(newFolderNameInput.value.trim());
    }
});
document.body.addEventListener('keydown', e => {
    if(e.target.id === 'new-folder-name' && e.key === 'Enter') {
        addFolder(e.target.value.trim());
    }
});

const closeMenu = () => { sidebar.classList.add('-translate-x-full'); menuOverlay.classList.add('hidden'); };
menuToggle.addEventListener('click', () => { sidebar.classList.remove('-translate-x-full'); menuOverlay.classList.remove('hidden'); });
menuOverlay.addEventListener('click', closeMenu);
saveModal.addEventListener('click', e => {
    const promptToSave = (currentBriefObject && e.target.closest('.save-to-folder-btn')) ? formatBriefForSaving(currentBriefObject) : currentPrompt;
    if (e.target === saveModal || e.target.closest('#modal-close-btn')) closeModal(saveModal);
    const saveBtn = e.target.closest('.save-to-folder-btn');
    if (saveBtn) { savePromptToFolder(promptToSave, saveBtn.dataset.folder); closeModal(saveModal); }
    if (e.target.id === 'modal-create-and-save-btn') {
        const newName = document.getElementById('modal-new-folder-name').value.trim();
        if (newName) { addFolder(newName); savePromptToFolder(promptToSave, newName); closeModal(saveModal); }
    }
});
moveModal.addEventListener('click', e => {
    const modalContent = e.currentTarget.querySelector('div[data-source-folder]');
    if (!modalContent || e.target === moveModal || e.target.closest('#move-modal-close-btn')) { closeModal(moveModal); return; }
    const moveBtn = e.target.closest('.move-to-folder-btn');
    if (moveBtn) {
        const { sourceFolder, sourceIndex } = modalContent.dataset;
        movePrompt(sourceFolder, parseInt(sourceIndex), moveBtn.dataset.destFolder);
        closeModal(moveModal);
    }
});
foldersListContainer.addEventListener('click', e => { 
    const target = e.target;
    const summary = target.closest('summary');
    if (summary && target.closest('button')) e.preventDefault();
    
    const delPromptBtn = target.closest('.delete-prompt-btn');
    if (delPromptBtn) {
        const folder = delPromptBtn.dataset.folder;
        const index = parseInt(delPromptBtn.dataset.index);
        showConfirmModal('Permanently delete this spark?', () => {
            deletePrompt(folder, index);
            showToast('Spark deleted.', 'danger');
        });
    }
    
    const copyPromptBtn = target.closest('.copy-saved-prompt-btn');
    if(copyPromptBtn) {
        const promptText = savedData[copyPromptBtn.dataset.folder][parseInt(copyPromptBtn.dataset.index)];
        copyToClipboard(promptText);
    }
    
    const editPromptBtn = target.closest('.edit-saved-prompt-btn');
    if (editPromptBtn) {
        openEditSparkModal(editPromptBtn.dataset.folder, parseInt(editPromptBtn.dataset.index));
    }

    const delFolderBtn = target.closest('.delete-folder-btn');
    if (delFolderBtn) showConfirmModal(`Delete "${delFolderBtn.dataset.folder}" and all its prompts?`, () => deleteFolder(delFolderBtn.dataset.folder));
    
    const renFolderBtn = target.closest('.rename-folder-btn');
    if(renFolderBtn) {
        const oldName = renFolderBtn.dataset.folder;
        const h3 = renFolderBtn.closest('summary').querySelector('h3');
        h3.innerHTML = `<input type="text" class="input-field rounded px-2 py-1 text-lg w-full" value="${oldName}" />`;
        const input = h3.querySelector('input');
        input.focus(); input.select();
        const finish = () => renameFolder(oldName, input.value.trim());
        input.onblur = finish;
        input.onkeydown = (ev) => { if (ev.key === 'Enter') input.blur(); if (ev.key === 'Escape') { input.value = oldName; input.blur(); }};
    }
    const movPromptBtn = target.closest('.move-prompt-btn');
    if (movPromptBtn) openMoveModal(movPromptBtn.dataset.folder, parseInt(movPromptBtn.dataset.index));
});

// --- ToS & Daily Limit LOGIC ---
function getTodayDateString() {
    return new Date().toISOString().split('T')[0];
}

function checkBriefLimit() {
    const storedData = JSON.parse(localStorage.getItem('inspiradi_brief_limit'));
    const today = getTodayDateString();

    if (storedData && storedData.date === today) {
        briefLimitData = storedData;
    } else {
        briefLimitData = { count: 0, date: today };
        localStorage.setItem('inspiradi_brief_limit', JSON.stringify(briefLimitData));
    }
    updateBriefLimitCounter();
    return briefLimitData.count < BRIEF_DAILY_LIMIT;
}

function updateBriefLimitCounter() {
    const remaining = BRIEF_DAILY_LIMIT - briefLimitData.count;
    const generateBtn = document.getElementById('generate-random-brief-btn');
    
    if (remaining > 0) {
        briefLimitCounter.textContent = `You have ${remaining}/${BRIEF_DAILY_LIMIT} random briefs remaining today.`;
        if(generateBtn) generateBtn.disabled = false;
    } else {
        briefLimitCounter.textContent = "You've used all your random briefs for today. Come back tomorrow for more!";
        if(generateBtn) generateBtn.disabled = true;
    }
}

tosCheckbox.addEventListener('change', () => {
    tosAgreeBtn.disabled = !tosCheckbox.checked;
});
tosAgreeBtn.addEventListener('click', () => {
    localStorage.setItem('inspiradi_tos_agreed', 'true');
    closeModal(tosModal);
});
tosDeclineBtn.addEventListener('click', () => {
    showInfoModal("You must agree to the Terms of Service to use Inspiradi.");
});
tosFooterLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(tosModal);
});

window.addEventListener('load', () => {
     loadTheme();
     renderCategories();
     renderFoldersAndPrompts();
     renderSparkOfTheDay();
     updateBriefViewButtons();
     switchView('home');

     if (!localStorage.getItem('inspiradi_welcomed')) {
        showWelcomeModal();
     } else if (!localStorage.getItem('inspiradi_tos_agreed')) {
        openModal(tosModal);
     }
});
