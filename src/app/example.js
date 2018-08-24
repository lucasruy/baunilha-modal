const initializeExamples = () => {
    const modalContent = document.querySelector('.modal-content');

    const modal = new BaunilhaModal({
        buttonTarget: '.trigger-example-01',
        content: modalContent
    });
    
    const modal01 = new BaunilhaModal({
        buttonTarget: '.trigger-example-02',
        content: '<h5>My modal text</h5><p>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é.</p>'
    });
    
    const modal02 = new BaunilhaModal({
        buttonTarget: '.trigger-example-03',
        content: 'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mé, boa gentis num é.'
    });
};

document.addEventListener('DOMContentLoaded', initializeExamples, false);