import React from "react";
import { shallow, mount } from "enzyme";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import axios from "axios";

import Card, { UnconnectedCard } from "../Card";

jest.spyOn(axios, 'get')

const intitialState = {
    meetups: []
};

const mockStore = configureStore();
let store;

beforeEach(() => {
    store = mockStore(intitialState);
});

const setup = (props = {}) => {
    return mount(
        <StaticRouter>
            <Card {...{ store }} />
        </StaticRouter>
    );
};

describe("Card component should be rendered", () => {
    test("card renders without error", () => {
        const wrapper = setup();
        const cardComponent = wrapper.find("[data-test='component-card']");
        expect(cardComponent.length).toBe(1);
    });
});

describe("<UnconnectedCard />", () => {
    test("List meetups once payload is populated", () => {
        const wrapper = shallow(
            <UnconnectedCard
                meetups={[
                    {
                        createdon: "Thu, 16 May 2019 11:56:19 GMT",
                        happeningon: "Sat, 08 Jun 2019 09:00:00 GMT",
                        id: 9,
                        images: "https://i.imgur.com/cV0fHHO.jpg",
                        location: "Mount Kenya",
                        organizer: "Hike Kenya",
                        tags: null,
                        title: "Mountain hike",
                        username: "admin"
                    },
                    {
                        createdon: "Fri, 17 May 2019 06:24:11 GMT",
                        happeningon: "Sat, 25 May 2019 09:00:00 GMT",
                        id: 12,
                        images: "https://i.imgur.com/dqBRYyN.png",
                        location: "Andela Kenya Office",
                        organizer: "Andela",
                        tags: null,
                        title: "Golang Workshop",
                        username: "admin"
                    }
                ]}
            />
        );

        const meetupComponent = wrapper.find("[data-test='each-meetup']");
        expect(meetupComponent.length).toBe(2);
    });

    test("Test for component will mount", async () => {
        const display_meetups = jest.fn()
        const data = {
            data: [[
                {
                    createdon: "Fri, 17 May 2019 06:29:27 GMT",
                    happeningon: "Sat, 20 Jul 2019 18:00:00 GMT",
                    id: 13,
                    images: "https://i.imgur.com/vhOEkIo.jpg",
                    location: "Budapest, Spain",
                    organizer: "Tomorrow Land",
                    tags: null,
                    title: "EDC Summer ",
                    username: "admin"
                }
            ]],
            status: 200
        }

        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data
            })
        });

        const wrapper = shallow(<UnconnectedCard meetups={[]} display_meetups={display_meetups} />)
        await wrapper.instance().componentDidMount();
        expect(display_meetups).toHaveBeenCalled()
    })
});