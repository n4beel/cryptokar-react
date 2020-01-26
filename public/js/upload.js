const postAd = (btn) => {
    const name = document.getElementById('name').value;
    const manufacturer = document.getElementById('manufacturer').value;
    const model = document.getElementById('model').value;
    const engineNum = document.getElementById('engineNum').value;
    const chassisNum = document.getElementById('chassisNum').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    const capacity = document.getElementById('capacity').value;
    const doors = document.getElementById('doors').value;
    const engineSize = document.getElementById('engineSize').value;
    const cylinders = document.getElementById('cylinders').value;
    const feulCapacity = document.getElementById('feulCapacity').value;
    const feulType = document.getElementById('feulType').value;
    const transmission = document.getElementById('transmission').value;
    const gearBox = document.getElementById('gearBox').value;
    const weight = document.getElementById('weight').value;
    const length = document.getElementById('length').value;
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    const description = document.getElementById('description').value;
    const uploader = document.getElementById('picture');
    const img = uploader.files[0];
    let imgUrl;
    // console.log(img)

    if (name !== '' && manufacturer !== '' && model !== '' && engineNum !== '' && chassisNum !== '' && price !== '' && description !== '' && gearBox !== '' && transmission !== '') {
        // debugger
        btn.value = 'Adding...'
        firebase.storage().ref('cars/' + img.name).put(img)
            .then((success) => {
                firebase.storage().ref('cars/' + img.name).getDownloadURL()
                    .then((url) => {
                        imgUrl = url;
                        userId = JSON.parse(localStorage.getItem('UserDetails')).uid;
                        let userPost = {
                            name: name,
                            manufacturer: manufacturer,
                            model: model,
                            engineNum: engineNum,
                            chassisNum: chassisNum,
                            imgUrl: imgUrl,
                            color: color,
                            price: price,
                            capacity: capacity,
                            doors: doors,
                            engineSize: engineSize,
                            cylinders: cylinders,
                            feulCapacity: feulCapacity,
                            feulType: feulType,
                            transmission: transmission,
                            gearBox: gearBox,
                            weight: weight,
                            length: length,
                            height: height,
                            width: width,
                            description: description,
                            userUid: userId
                        }

                        db.collection('users').doc(userPost.userUid).collection('store').add(userPost)
                            .then(() => {
                                db.collection('cars').add(userPost).then(() => {

                                    swal({
                                        icon: 'success',
                                        text: 'Car Successfully Added'
                                    }).then(() => {
                                        btn.value = 'Add';
                                    })
                                }).catch((error) => {
                                    swal({
                                        icon: 'warning',
                                        text: `${error.message}`
                                    })
                                        .then(() => {
                                            btn.value = 'Add'
                                        })
                                })
                            })

                    })
                    .catch((error) => {
                        swal({
                            icon: 'warning',
                            text: `${error.message}`
                        })
                            .then(() => {
                                btn.value = 'Add'
                            })
                    })
            })

    }
    else {
        swal({
            icon: 'warning',
            text: 'Please Fill all values'
        })
    }

}

const addForm = document.querySelector('#addForm');


addForm.addEventListener('submit', e => {
    const addBtn = document.querySelector('#addBtn');
    e.preventDefault();
    postAd(addBtn);
})