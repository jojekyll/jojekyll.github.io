require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://api.sendinblue.com/v3/contacts")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Post.new(url)
request["accept"] = 'application/json'
request["content-type"] = 'application/json'
request["api-key"] = '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'
request.body = "{\"attributes\":{\"FNAME\":\"New Value\",\"EMAIL\":\"New Value\"},\"listIds\":[2],\"updateEnabled\":false,\"email\":\"JONNY@JONNY.COM\"}"

response = http.request(request)
puts response.read_body