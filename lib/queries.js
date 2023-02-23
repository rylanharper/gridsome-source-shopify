'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ARTICLES_QUERY = `
  query Articles ($first: Int!, $after: String) {
    data: articles (first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          author: authorV2 {
            bio
            email
            firstName
            lastName
            name
          }
          blog {
            id
            handle
            title
          }
          comments(first: 250) {
            edges {
              node {
                author {
                  email
                  name
                }
                content
                contentHtml
                id
              }
            }
          }
          content
          contentHtml
          excerpt
          excerptHtml
          handle
          id
          image {
            id
            altText
            height
            width
            url
          }
          publishedAt
          seo {
            description
            title
          }
          onlineStoreUrl
          publishedAt
          tags
          title
        }
      }
    }
  }
`;

const BLOGS_QUERY = `
  query Blogs ($first: Int!, $after: String) {
    data: blogs(first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          authors {
            bio
            email
            firstName
            lastName
            name
          }
          handle
          id
          title
        }
      }
    }
  }
`;

const COLLECTIONS_QUERY = `
  query Collections ($first: Int!, $after: String) {
    data: collections (first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        typeName: __typename
        cursor
        node {
          description
          descriptionHtml
          handle
          id
          image {
            id
            altText
            height
            width
            url
          }
          products (sortKey: COLLECTION_DEFAULT, first: $first) {
            pageInfo {
              hasNextPage
            }
            edges {
              cursor
              node {
                id
              }
            }
          }
          title
          updatedAt
        }
      }
    }
  }
`;

const COLLECTION_QUERY = `query SingleCollection ($handle: String!, $first: Int!, $after: String) {
  collection: collectionByHandle (handle: $handle) {
    products (sortKey: COLLECTION_DEFAULT, first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
}`;

const PRODUCTS_QUERY = `
  query Products ($first: Int!, $after: String) {
    data: products (first: $first, after: $after) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          collections (first: $first) {
            edges {
              node {
                id
              }
            }
          }
          availableForSale
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          createdAt
          description
          descriptionHtml
          handle
          id
          images(first: 250) {
            edges {
              node {
                id
                altText
                height
                width
                url
              }
            }
          }
          onlineStoreUrl
          options(first: 250) {
            id
            name
            values
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          productType
          publishedAt
          tags
          title
          totalInventory
          updatedAt
          variants(first: 250) {
            edges {
              node {
                id
                availableForSale
                compareAtPrice {
                  amount
                  currencyCode
                }
                image {
                  id
                  altText
                  height
                  width
                  url
                }
                metafields(identifiers: { namespace: "custom", key: "color" }){
                  key
                  value
                  namespace
                }
                price {
                  amount
                  currencyCode
                }
                quantityAvailable
                requiresShipping
                selectedOptions {
                  name
                  value
                }
                sku
                title
                unitPrice {
                  amount
                  currencyCode
                }
                weight
                weightUnit
              }
            }
          }
        }
      }
    }
  }
`;

const SHOP_QUERY = `
  query Shop {
    shop {
      brand
      description
      id
      moneyFormat
      name
      primaryDomain {
        host
        sslEnabled
        url
      }
      privacyPolicy {
        body
        handle
        id
        title
        url
      }
      refundPolicy {
        body
        handle
        id
        title
        url
      }
      termsOfService {
        body
        handle
        id
        title
        url
      }
      shipsToCountries
    }
  }
`;

const PRODUCT_TYPES_QUERY = `
  query ProductTypes ($first: Int!) {
    data: productTypes(first: $first) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node
      }
    }
  }
`;

const PRODUCT_TAGS_QUERY = `
  query ProductTags ($first: Int!) {
    data: productTags(first: $first) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node
      }
    }
  }
`;

const PAGES_QUERY = `
  query Pages ($first: Int!) {
    data: pages (first: $first) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          body
          bodySummary
          createdAt
          handle
          id
          onlineStoreUrl
          title
          updatedAt
        }
      }
    }
  }
`;

exports.ARTICLES_QUERY = ARTICLES_QUERY;
exports.BLOGS_QUERY = BLOGS_QUERY;
exports.COLLECTIONS_QUERY = COLLECTIONS_QUERY;
exports.COLLECTION_QUERY = COLLECTION_QUERY;
exports.PAGES_QUERY = PAGES_QUERY;
exports.PRODUCTS_QUERY = PRODUCTS_QUERY;
exports.PRODUCT_TAGS_QUERY = PRODUCT_TAGS_QUERY;
exports.PRODUCT_TYPES_QUERY = PRODUCT_TYPES_QUERY;
exports.SHOP_QUERY = SHOP_QUERY;
