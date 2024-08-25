import {createClient} from "contentful";
import {useEffect, useState} from "react";

const client = createClient({
    space: 't1hbhgf9gybb',
    environment: 'master',
    accessToken: 'WyrkS7g-7wXsb422QhM4E3gNJlthek_Q9xQmoW9fHL0',
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item) => {
                const {title, url, image} = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return {title, url, id, img};
            });
            console.log(response);
            setLoading(false);
            setProjects(projects);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return {loading, projects};
}


