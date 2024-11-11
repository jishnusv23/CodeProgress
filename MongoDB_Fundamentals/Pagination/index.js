//pagination

async function getPaginationPostSorted(page, limit) {
  try {
    const skip = (page - 1) * limit;

    const posts = await db.posts
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.posts.countDocuments();
    return {
      posts,
      currentPage: page,
      totalPage: Math.ceil(total / limit),
      hasMore:skip+posts.length<total
    };
  } catch (error) {
    console.log(error);
  }
}
