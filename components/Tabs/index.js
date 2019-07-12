// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('Data:', data);

        const topics = document.querySelector('.topics');
        // const topicsArray = data.data.topics;
        const topicsArray = data.data.topics;
        topicsArray.forEach(topic => {
            // const tab = createTab(topic);
            topics.appendChild(createTab(topic));
            console.log(topics);
        });
    })
    .catch(error => {
        console.log('Get it together, Lambda!', error);
    })


// Create and Return DOM Node
function createTab(info) {

    // Create Element
    const tab = document.createElement('div');

    // Set Class Name
    tab.classList.add('tab');

    // Set Content
    tab.textContent = `${info}`;

    return tab;
}