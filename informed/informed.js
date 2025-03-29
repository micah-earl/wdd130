function filter_events(category) {
    let event_boxes = document.querySelectorAll('.event_box');

    event_boxes.forEach(event_box => {
        if (category === 'all' || event_box.dataset.category === category) {
            event_box.style.display = 'block'; 
        } else {
            event_box.style.display = 'none'; 
        }
    });
}