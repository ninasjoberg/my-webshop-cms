export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titleExtended",
      title: "Title extended for product page",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "titleForGoogleSearch",
      title: "Title for google search",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "localeBlockContent",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt",
            },
          ],
        },
      ],
    },
    {
      title: "Price SEK",
      name: "price",
      type: "number",
    },
    {
      title: "Amount st/par",
      name: "amount",
      type: "string",
    },
    {
      title: "Quantity in stock",
      name: "quantity",
      type: "string",
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          name: "variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Size",
      name: "size",
      type: "array",
      of: [
        {
          title: "Variant",
          name: "variant",
          type: "productVariant",
        },
      ],
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      title: "Collections",
      name: "collections",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "collection" },
        },
      ],
    },
    {
      title: "Out of stock",
      name: "outOfStock",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    },
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};
