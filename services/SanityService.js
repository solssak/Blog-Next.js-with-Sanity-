import sanityClient from "@sanity/client";

export default class SanityService {
  _client = sanityClient({
    dataset: "production",
    projectId: "c7br1j5h",
    useCdn: process.env.NODE_ENV === "production",
  });

  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
    );
  }

  async getPosts() {
    return await this._client.fetch(
      `*[_type == 'post']{
      title,
      subtitle,
      createdAt,
      'content': content[]{
        ...,
        ...select(_type == 'imageGallery' => {'images':images[]{..., 'url': asset -> url}})
      },
      'slug': slug.current,
      'thumbnail': {
        'alt': thumbnail.alt,
        'imageUrl': thumbnail.asset -> url
        },
      'author': author -> {
        name,
        role,
        'image': image.asset -> url
      },
      'tag': tag -> {
        title,
        'slug': slug.current
      }
    }
    `
    );
  }
}
