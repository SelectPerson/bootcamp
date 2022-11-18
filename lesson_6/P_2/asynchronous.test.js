async function fetchData () { console.log('Hello') }

// Promises
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// Async/Await
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});

// Callbacks
// Don't do this!
test('the data is peanut butter', () => {
    function callback(error, data) {
        if (error) {
            throw error;
        }
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});

test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

// .resolves / .rejects
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
});