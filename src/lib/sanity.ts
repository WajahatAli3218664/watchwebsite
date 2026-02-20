import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "5601ix16",
    dataset: "production",
    apiVersion:"2025-02-20",
    useCdn:true,
    token: "skbJyO4j58A6RuS97I0zo8VXZESHxyIuqo3Lyqw6e32dFQLtzZ0pvgORn53rsXtWhFWyEe6ZCwhq0vxbFx5MojIye7xNhcHbwbd4fJgX4HicxKFY0fMT54a4SMkptU8tTaNJmLb2RMnsQX7DJ0C8RYRBKrrwcCEaDsw4JZE9MquzZW8zjCN2",
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;