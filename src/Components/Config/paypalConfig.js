import payoutsNodeJssdk from '@paypal/payouts-sdk';

function cliente() {
    return new payoutsNodeJssdk.core.PayPalHttpClient(environment());
}

function environment() {
    let clientId = 'ASYNn_hTk9wRgKJhwEMdtXKomkcFZrLhDcOrrX8DSeIJua3zFn96NwddI_fA3tOJnTnP024jcdPUvWIg' || 'ASYNn_hTk9wRgKJhwEMdtXKomkcFZrLhDcOrrX8DSeIJua3zFn96NwddI_fA3tOJnTnP024jcdPUvWIg';
    let clientSecret = 'ECIcpg6M1PEyXVEIQToiYPDQ6pwJ6bpZ0FOzoHwtgwcXCMTOCWtawahRb7yFxlVCHHyyi1YhauRkVojM' || 'ECIcpg6M1PEyXVEIQToiYPDQ6pwJ6bpZ0FOzoHwtgwcXCMTOCWtawahRb7yFxlVCHHyyi1YhauRkVojM';
    
    if (process.env.NODE_ENV === 'production') {
        return new payoutsNodeJssdk.core.LiveEnvironment(clientId, clientSecret);
    }

    return new payoutsNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
}

module.exports = { cliente };
