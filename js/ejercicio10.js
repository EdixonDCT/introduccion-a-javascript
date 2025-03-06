function delay(ms)
{
    return new Promise(function (resolve, reject)
{
    setTimeout(() => resolve("hecho"), ms);
});
}
delay(3000).then(result => alert(result));