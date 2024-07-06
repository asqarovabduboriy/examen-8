import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request for all products with limit
    getProducts: build.query({
      query: (query) => {
        if (!query || !query.path) {
          return {
            url: "/products",
            method: "GET",
            params: {},
          };
        }
        return {
          url: `/products/${query.path}`,
          method: "GET",
          params: query.params,
        };
      },
      providesTags: ["Product"],
    }),

    // Get request for a single product by ID
    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),

    // Get request for products by category
    getProductsByCategory: build.query({
      query: (params) => ({
        url: `/products/categories`,
        params,
      }),
      providesTags: ["Product"],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    editProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),

    createProduct: build.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductsByCategoryQuery,
  useDeleteProductMutation,
  useEditProductMutation,
  useCreateProductMutation,
} = productApi;
