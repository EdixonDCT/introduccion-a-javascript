function delay(ms)
{
    return new Promise(function (resolve, reject)
{
    setTimeout(() => resolve("Promisa resuelta"), ms);
});
}
delay(3000).then(result => alert(result));