import React, {useRef, useState, useEffect} from "react";
import {
    SellPageContainer,
    SellPageFormContainer,
    ImageContainer,
    SellPagePostContainer,
} from "./sellPage.styles";
import FormInput from "../../components/form-input/form-input.component";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "../../components/button/button.component";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Waves from "../../components/waves/waves.component";
import {PostStart, Reset} from "../../redux/sell/sell.actions.js";
import {connect} from "react-redux";
import Alert from "../../components/alert/altert.component";
import ErrorMessage from "../../components/error-message/error-message.component";
import Spinner from "../../components/spinner/spinner.component";
import {withRouter} from "react-router-dom";


const SellPage = ({postStart, postSuccess, postError, isPosting, history , reset}) => {
    const inputFileRef = useRef();
    const [open, setOpen] = useState(false);

    const [image, setImage] = useState(null);

    const [info, setInfo] = useState({
        title: "",
        description: "",
        price: 0,
        image: "",
    });

    useEffect(() => {
        if (postSuccess === true || postError != null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [postSuccess, postError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        postStart(info);
    };

    const handleChange = (e) => {
        const {value, name} = e.target;
        setInfo({...info, [name]: value});
    };

    return (
        <SellPageContainer>
            {isPosting ? <Spinner fullscreen/> : ""}
            <Alert
                open={open}
                autoHideDuration={2000}
                onClose={() => {
                    setOpen(false);
                    reset();
                    if(postSuccess) {
                        history.push("/shop");
                    }
                }}
                severity={postSuccess ? "success" : "error"}
            >
                {postSuccess ? "Successfully added post" : "error posting"}
            </Alert>
            <SellPagePostContainer as="form" onSubmit={handleSubmit}>
                <input
                    name="images[]"
                    label="images"
                    type="file"
                    ref={inputFileRef}
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => {
                        // setImage(URL.createObjectURL(e.target.files[0]));
                        let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = () => {
                            setImage(reader.result);
                            setInfo({...info, image: reader.result});
                        };
                    }}
                />
                <h1
                    style={{
                        background: "#ccc",
                        width: "200px",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        transform: "translate(30%, -50%)",
                    }}
                >
                    Post Product
                </h1>
                <ImageContainer onClick={() => inputFileRef.current.click()}>
                    {image ? (
                        <img alt="khraa" src={image}/>
                    ) : (
                        <AddCircleOutlineIcon
                            style={{
                                width: "100px ",
                                height: "100px",
                                color: "rgba(0, 0, 0, 0.1) ",
                            }}
                        />
                    )}
                </ImageContainer>
                <SellPageFormContainer>
                    {postError ? <ErrorMessage message={postError}/> : ""}
                    <FormInput name="title" label="title" onChange={handleChange}/>
                    <FormInput
                        name="description"
                        label="description"
                        multiline
                        rows={10}
                        rowsMax={16}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <FormInput
                        onChange={handleChange}
                        name="price"
                        label="price"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">TND</InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        style={{
                            width: "200px",
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            background: "#ccc",
                            transform: "translate(-30%, 50%)",
                        }}
                    >
                        Post
                    </Button>
                </SellPageFormContainer>
            </SellPagePostContainer>
            <Waves/>
        </SellPageContainer>
    );
};

const mapStateToProps = ({sell: {postSuccess, postError, isPosting}}) => ({
    postSuccess,
    postError,
    isPosting,
});

const mapDispatchToProps = (dispatch) => ({
    postStart: (info) => dispatch(PostStart(info)),
    reset: () => dispatch(Reset())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SellPage));
