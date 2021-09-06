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
      title: "TitleForGoogleSearch",
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
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
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
      quantity: "Unlimited",
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
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
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
