module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/lib')
    eleventyConfig.addPassthroughCopy('./src/scss')
    eleventyConfig.addPassthroughCopy('./src/admin')

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}