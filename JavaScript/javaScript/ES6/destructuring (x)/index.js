// ------------- EX 1 -------------

const profile = {
    title: 'Engineer',
    department: 'Engineering'
};
  
function isEngineer(profile) {
    const { title, department } = profile;
    return title === 'Engineer' && department === 'Engineering';
}

isEngineer(profile);