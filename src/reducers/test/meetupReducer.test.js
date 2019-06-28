
import actionTypes from "../../actions/actionTypes";
import { meetupsReducer } from "../meetupReducer";

test("Meetups initial state should be an empty list", () => {
    const newState = meetupsReducer(undefined, []);
    expect(newState).toEqual([]);
});

test(" Should return a list of meetups", () => {
    const meetupsList = [
        {
            "createdon": "Thu, 16 May 2019 11:56:19 GMT",
            "happeningon": "Sat, 08 Jun 2019 09:00:00 GMT",
            "id": 9,
            "images": "https://i.imgur.com/cV0fHHO.jpg",
            "location": "Mount Kenya",
            "organizer": "Hike Kenya",
            "tags": null,
            "title": "Mountain hike",
            "username": "admin"
        },
        {
            "createdon": "Fri, 17 May 2019 06:24:11 GMT",
            "happeningon": "Sat, 25 May 2019 09:00:00 GMT",
            "id": 12,
            "images": "https://i.imgur.com/dqBRYyN.png",
            "location": "Andela Kenya Office",
            "organizer": "Andela",
            "tags": null,
            "title": "Golang Workshop",
            "username": "admin"
        }
    ];

    const newState = meetupsReducer(undefined, {
        type: actionTypes.MEETUPS,
        payload: meetupsList
    });

    expect(newState).toEqual(
        meetupsList
    )
})