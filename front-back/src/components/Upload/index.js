import React, { useState } from 'react'
import './index.css'
import 'antd/dist/antd.css';
import { Carousel, Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const UploadImg = props => {
    const [imageSlide, setImageSlide] = useState([])
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState()
    const [linkValue, setLinkValue] = useState("")
    async function handleSubmit(event) {
        event.preventDefault();
        let data = { id: imageSlide.length, link: linkValue, image: imageUrl }
        if (imageUrl && linkValue) {
            await imageSlide.push(data)
            await setImageUrl()
            await setLinkValue("")
        }
    }

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            // this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                // imageSlide.push(imageUrl)
                setImageUrl(imageUrl)
                setLoading(false)
            }
                // this.setState({
                //     imageUrl,
                //     loading: false,
                // }),
            );
        }
    };
    const editImage = id => {

    }
    const deleteImage = async id => {
        console.log(id)
        console.log(imageSlide.findIndex(x => x.id == id))
        const data = await imageSlide.findIndex(x => x.id == id)
        await setImageSlide(imageSlide.splice(data, 1))
        await console.log(imageSlide);

    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div style={{ padding: 20 }}>
            <div style={{ textAlign: "center" }}>
                <h1>Dashboard</h1>
            </div>
            <hr />
            <div style={{ padding: 20, width: '50%' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", marginTop: 10 }}><label style={{ marginRight: 35 }}>link:</label><input value={linkValue} onChange={(e) => setLinkValue(e.target.value)} style={{ width: "100%" }} /></div>
                    <div style={{ display: "flex", marginTop: 10 }}><label style={{ marginRight: 35 }}>Upload:</label>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload></div>
                    {/* <input disabled={} type="submit" value="เพิ่มรูปภาพ" /> */}
                    <Button disabled={!imageUrl && !linkValue} onClick={handleSubmit}>เพิ่มรูปภาพ</Button>
                    <Button>cancle</Button>
                </form>
            </div>
            <ul>
                {imageSlide.map(img => {
                    return (
                        <li>
                            <hr />
                            <div style={{ display: "flex" }}><label style={{ marginRight: 35 }}>link: </label><div>{img.link}</div></div>
                            <div style={{ display: "flex" }}><label style={{ marginRight: 35 }}>image: </label><img src={img.image} height={100} width={100} /></div>
                            <div style={{ display: "flex" }}>
                                <Button onClick={() => editImage(img.id)} style={{ margin: 5 }}>Edit</Button>
                                <Button onClick={() => deleteImage(img.id)} style={{ margin: 5 }}>Delete</Button>
                            </div>
                        </li>

                    )
                })}
            </ul>
            <hr />
            <div>
                <b>
                    {"preview".toUpperCase()}
                </b>
            </div>
            <div style={{ width: "50%" }}>
                <Carousel autoplay>
                    {imageSlide.length == 0
                        ?
                        <div>
                            <h3>show image</h3>
                        </div>
                        : imageSlide.map(img =>
                            <div>
                                <img src={img.image} height={400} width={'100%'} />
                            </div>
                        )
                    }
                </Carousel>
                {JSON.stringify(imageSlide)}
                <div style={{ margin: 10, display: "flex", justifyContent: "center" }}>
                    <Button>SAVE</Button>
                </div>
            </div>

        </div >
    )
}
export default UploadImg