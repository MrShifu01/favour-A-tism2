function asyncHandler(fn) {
    return function(req, res, next) {
      // Execute the async function and handle any errors
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

module.exports = asyncHandler